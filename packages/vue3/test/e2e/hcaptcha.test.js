import path from "path";
import fs from "fs";
import 'regenerator-runtime/runtime';
import playwright from "playwright";
import JestImageSnapshot from "jest-image-snapshot";
import { setupPage } from "./jest-setup";

const hCaptchaVue3 = fs.readFileSync(path.resolve(__dirname, "..", "..", "dist", "hcaptcha-vue3.umd.js"), "utf-8");

const HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>@hcaptcha/vue-hcaptcha demo</title>
    <script src="https://unpkg.com/vue@3"></script>
    <script>${hCaptchaVue3}</script>
    <body>
        <div id="root">
            <vue-hcaptcha
                    sitekey="10000000-ffff-ffff-ffff-000000000001"
                    @verify="onVerify"
            ></vue-hcaptcha>
        </div>
        
        <script>
            Vue
                .createApp({
                methods: {
                    onVerify: (token, eKey) => {
                        console.log('Verified: ', {token, eKey});
                        window.onVerify({token, eKey});
                    }
                }
            })
                .component('VueHcaptcha', VueHcaptcha)
                .mount('#root');
        </script>
    </body>
</html>
`;

const args = [ "--no-sandbox", "--disable-setuid-sandbox" ];

async function waitForFrame(ownerFrame, name, hcaptchaId) {
    const srcSelector = `[src*='/hcaptcha.html#frame=${name}${hcaptchaId ? `&id=${hcaptchaId}`: ""}']`;
    const elem = await ownerFrame.waitForSelector(
        `iframe${srcSelector}`,
        { state: "attached" }
    );
    const frame = await elem.contentFrame();
    await frame.waitForLoadState();
    return { elem, frame };
}

const toMatchImageSnapshot = JestImageSnapshot.configureToMatchImageSnapshot({
    failureThreshold: 0.05,
    failureThresholdType: "percent"
});
expect.extend({ toMatchImageSnapshot });

describe("hCaptcha vue3", () => {
    let browser, page;

    beforeAll(async () => {
        browser = await playwright.chromium.launch({ headless: true, args });
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage({ bypassCSP: true });
        setupPage(page);
        await page.setViewportSize({ width: 1280, height: 720 });
        await page.route(/https:\/\/hcaptcha\.local/, route => route.fulfill({ body: HTML }));
        await page.goto("https://hcaptcha.local");
    });

    afterEach(async () => {
        await page.close();
    });

    it("should render anchor", async () => {
        const { frame } = await waitForFrame(page, "checkbox");
        const anchor = await frame.$("#anchor");
        expect(await anchor.screenshot()).toMatchImageSnapshot({ failureThreshold: 0.01 });
    });

    it("should get token", async () => {
        const onVerifyMock = jest.fn();
        await page.exposeBinding("onVerify", onVerifyMock);
        const getRequestPromise = page.waitForRequest("**/getcaptcha?*");
        const { frame } = await waitForFrame(page, "checkbox");
        const anchor = await frame.$("#anchor");
        await anchor.click();
        await getRequestPromise;
        await frame.waitForSelector(".check");
        expect(onVerifyMock).toHaveBeenCalledTimes(1);
        expect(onVerifyMock).toHaveBeenCalledWith(expect.anything(), { token: "10000000-aaaa-bbbb-cccc-000000000001", eKey: "" });
        expect(await anchor.screenshot()).toMatchImageSnapshot({ failureThreshold: 0.01 });
    });

});
