import { expect, test } from '@playwright/test';
import { WorkspacePage } from '../helpers/workspace.page';
import { FolderApi } from '../../shared/api';

test.describe('Folder creation', () => {

    let folderName: string;
    let workspacePage: WorkspacePage;

    test.beforeEach(async ({ page }) => {
        // 3️⃣ Do you know how we can initialize the objects of the pages in another way (using Playwright functionalities)?
        // Do we need to have it here?
        workspacePage = new WorkspacePage(page)
        // 3️⃣ ✨ For what on earth do we use this twisted naming logic instead of simply calling it "test-folder"
        folderName = `test-${Math.floor(Math.random() * 9999999999)}`;
    });

    test.describe("Happy path", () => {
        test.beforeEach(async () => {

            // 2️⃣  Login using the previously created PageObject or...
            // ... do you know how to avoid logging in user in beforeEach hook? How you can do that?
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });

        test("should create a new folder with name test", async () => {

            // 2️⃣  Implement the following steps
            // - Click on the new button
            // - Click on the Create folder button
            // - Fill in the Name of the folder
            // - Create on the create Button
            workspacePage.openCreateFolderDialog();
            workspacePage.createFolder(folderName)

            // 2️⃣  Make an assertion, what assertion?
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });
    });

    test.describe('Sad path', () => {
        test.beforeEach(async () => {

            // 3️⃣ Create a folderAPI here, and initialize it (wait until it has been logged in), then login through the UI (or use the
            // same logic as in previous describe block)
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });

        test.afterEach(async () => {

            // 4️⃣ ✨ Riddle: what can go here? What can you make better based in this and in the previous test (level 2) also?
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });

        test("should not be able to create a new folder with existing name (test)", async () => {
            // 3️⃣  Using the folderApi create a folder with folderName
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================

            workspacePage.openCreateFolderDialog();
            workspacePage.createFolder(folderName)

            // 2️⃣  Make an assertion: snackbar message contains `There's already a folder with this name. Try a different name.`
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });
    });
});

