import puppeteer from "puppeteer";

describe("End to end testing", () => {
    let browser = null;
    beforeAll(async () => {
        browser = await puppeteer.launch();
    });
    afterAll(() => {
        browser.close();
    });
    describe("Login tests", () => {
        test("Successfull login", async () => {
            const page = await browser.newPage();
            await page.goto("http://localhost:5000/");
            let input = await page.waitForSelector(
                "form div:nth-child(1) input"
            );
            await input.type("007");
            input = await page.waitForSelector("form div:nth-child(2) input");
            await input.type("007");
            await page.click("button");
            await page.waitForNavigation();
            const alert = await page.evaluate(() => {
                return document.querySelector("#__react-alert__").innerText;
            });
            expect(alert).toBe("Bienvenue");
            expect(page.url()).toBe("http://localhost:5000/dashboard");
        });
        test("Failed login with wrong matricule", async () => {
            const page = await browser.newPage();
            await page.goto("http://localhost:5000/");
            let input = await page.waitForSelector(
                "form div:nth-child(1) input"
            );
            await input.type("07");
            input = await page.waitForSelector("form div:nth-child(2) input");
            await input.type("007");
            await page.click("button");
            let alert = null;
            while (true) {
                alert = await page.evaluate(() => {
                    return document.querySelector("#__react-alert__").innerText;
                });
                if (alert) {
                    break;
                }
            }
            expect(alert).toBe("Matricule n'existe pas");
        });
        test("Failed login with wrong password", async () => {
            const page = await browser.newPage();
            await page.goto("http://localhost:5000/");
            let input = await page.waitForSelector(
                "form div:nth-child(1) input"
            );
            await input.type("007");
            input = await page.waitForSelector("form div:nth-child(2) input");
            await input.type("07");
            await page.click("button");
            let alert = null;
            while (true) {
                alert = await page.evaluate(() => {
                    return document.querySelector("#__react-alert__").innerText;
                });
                if (alert) {
                    break;
                }
            }
            expect(alert).toBe("Mot de passe est incorrecte");
        });
    });
});
