export function setupPage(page) {
    page.on("console", async msg => {
        try {
            for (let i = 0; i < msg.args().length; ++i) {
                console.log(`${i}: ${JSON.stringify(await msg.args()[ i ].jsonValue())}`);
            }
        } catch(err) {
            console.error("Error encountered in `console` event");
        }
    });
}
