import { by, element } from "protractor";

export default class WorkspacePage {
    private static newButton = element(by.css('[data-automation-id="create-button"]'));
    private static createFolderOption = element(by.css('#app.create.folder')); // 4️⃣ ✨ What is the problem with this selector?

    private static nameInput = element(by.css('.mat-dialog-container #adf-folder-name-input'));
    private static createFolderButton = element(by.css('.mat-dialog-container #adf-folder-create-button'));
    public static createFolderCancelButton = element(by.css('.mat-dialog-container #adf-folder-cancel-button'));

    public static documentList = 'adf-document-list';
    public static snackBar = '.mat-snack-bar-container';

    public static openCreateFolderDialog() {
        // 2️⃣  Implement the code
        // ========================================================================================================================

            // type your code here...

        // ========================================================================================================================
    }

    public static createFolder(folderName: string) {
        // 2️⃣  Implement the code
        // ========================================================================================================================

            // type your code here...

        // ========================================================================================================================
    }
}
