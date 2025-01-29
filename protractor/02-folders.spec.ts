import { FolderApi } from '../shared/api';
import WorkspacePage from './helpers/workspace.page';

describe('Folder creation', () => {

    let folderName: string;

    beforeEach(() => {
        // 3️⃣ ✨ For what on earth do we use this twisted naming logic instead of simply calling it "test-folder"
        folderName = `test-${Math.floor(Math.random() * 9999999999)}`;
    });

    describe("Happy path", function () {
        beforeEach(() => {

            // 2️⃣  Login using the previously created PageObject
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });

        fit("should create a new folder with name test", () => {

            // 2️⃣  Implement the following steps
            // - Click on the new button
            // - Click on the Create folder button
            // - Fill in the Name of the folder
            // - Create on the create Button
            WorkspacePage.openCreateFolderDialog();
            WorkspacePage.createFolder(folderName)

            // 2️⃣  Make an assertion, what assertion?
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });
    });

    describe('Sad path', () => {
        beforeEach(() => {

            // 3️⃣ Create a folderAPI here, and initilise it (wait until it has been logged in), then login through the UI
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });

        afterEach(() => {

            // 4️⃣ ✨ Riddle: what can go here? What can you make better based inthis in the previous test (level 2) also?
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });

        it("should not be able to create a new folder with existing name (test)", () => {

            // 3️⃣  Using the folderApi create a folder with folderName
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================

            WorkspacePage.openCreateFolderDialog();
            WorkspacePage.createFolder(folderName)

            // 2️⃣  Make an assertion: snackbar message contains `There's already a folder with this name. Try a different name.`
            // ========================================================================================================================

                // type your code here...

            // ========================================================================================================================
        });
    });
});

