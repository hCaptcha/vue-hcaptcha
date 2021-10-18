import fs from "fs";
import playwright from "playwright";
import JestImageSnapshot from "jest-image-snapshot";
import { setupPage } from "./jest-setup";

const DEBUG = process.env.DEBUG || false;

const hCaptchaVue3 = fs.readFileSync("./dist/hcaptcha-vue3.umd.js", "utf-8");

const HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>@hcaptcha/vue-hcaptcha demo</title>
    <script src="https://unpkg.com/vue@next"></script>
    <script>${hCaptchaVue3}</script>
    <body>
        <div id="root">
            <vue-hcaptcha
                    sitekey="10000000-ffff-ffff-ffff-000000000001"
                    @verify="onVerify"
                    @expired="onExpire"
                    @challenge-expired="onExpire"
                    @error="onError"
            ></vue-hcaptcha>
        </div>
        
        <script>
            Vue
                .createApp({
                methods: {
                    onVerify: (token, eKey) => {
                        console.log('Verified: ', {token, eKey})
                    },
                    onExpire: () => {
                        console.log('Expired')
                    },
                    onError: (err) => {
                        console.log('Error', err)
                    }
                }
            })
                .component('VueHcaptcha', VueHcaptcha)
                .mount('#root');
        </script>
    </body>
</html>
`;

const headless = !DEBUG;
const args = [ "--no-sandbox", "--disable-setuid-sandbox" ];

async function waitForFrame(ownerFrame, name, hcaptchaId) {
    const srcSelector = `[src*='${name}.html${hcaptchaId ? `#id=${hcaptchaId}` : ""}']`;
    const elem = await ownerFrame.waitForSelector(
        `iframe${srcSelector}`,
        { state: "attached" }
    );
    const frame = await elem.contentFrame();
    await frame.waitForLoadState();
    return { elem, frame };
}

describe("hCaptcha vue3", () => {
    let browser, page;

    beforeEach(async () => {
        browser = await playwright.chromium.launch({ headless, args, devtools: true });
        page = await browser.newPage({ bypassCSP: true });
        setupPage(page);
        const toMatchImageSnapshot = JestImageSnapshot.configureToMatchImageSnapshot({
            failureThreshold    : 0.05,
            failureThresholdType: "percent"
        });
        expect.extend({ toMatchImageSnapshot });
        await page.setViewportSize({ width: 1280, height: 720 });
        await page.setContent(HTML);
    });

    afterEach(async () => {
        if (!DEBUG) {
            browser.close();
        }
    });

    it("should render anchor", async () => {
        const { frame } = await waitForFrame(page, "checkbox");
        const anchor = await frame.$("#anchor");
        expect(await anchor.screenshot()).toMatchImageSnapshot({ failureThreshold: 0.01 });
    });

});
