import { expect, test } from '@playwright/test';

test.describe('Login', () => {

	test.only("should login with username and password", async ({ page }) => {

        // 1️⃣  Login through the UI following best practices and necessary design patterns. Credentials are inside the .env file
        // ========================================================================================================================

        // ========================================================================================================================

        // 1️⃣  Make an assertion about being logged in: hint: .app-header, url
        // ========================================================================================================================

        

        // ========================================================================================================================

        // 2️⃣ ✨ Do you need to logout? Why?
    });

	test("should not login with wrong credential", async () => {

        // 1️⃣. Attempt to login with wrong credentials
        // ========================================================================================================================

            // type your code here...

        // ========================================================================================================================

        // 1️⃣  Make an assertion about not being logged in. Hints: "Invalid username or password", request interception?
        // ========================================================================================================================

            // type your code here...

        // ========================================================================================================================
	});

    // ❔ Do you think that these kind of tests are good candidates to have? Why? Why not?
});
