import { Locator, Page } from "@playwright/test";

export class WorkspacePage {

    private page: Page;
    private newButton: Locator;
    private createFolderOption: Locator;
    private nameInput: Locator;
    private createFolderButton: Locator;
    private createFolderCancelButton: Locator;
    private documentList: string;
    private snackBar: string;

    constructor(page: Page) {
        this.page = page;
        this.newButton = page.locator('[title="Create content"]');
        this.createFolderOption = page.locator('#app.create.folder'); // 4️⃣ ✨ What is the problem with this selector?
        this.nameInput = page.locator('.mat-dialog-container #adf-folder-name-input');
        this.createFolderButton = page.locator('.mat-dialog-container #adf-folder-create-button');
        this.createFolderCancelButton = page.locator('.mat-dialog-container #adf-folder-cancel-button');
        this.documentList = 'adf-document-list';
        this.snackBar = '.mat-snack-bar-container';
    }

    public async openCreateFolderDialog() {
        // 2️⃣  Implement the code
        // ========================================================================================================================

            // type your code here...

        // ========================================================================================================================
    }

    public async createFolder(folderName: string) {
        // 2️⃣  Implement the code
        // ========================================================================================================================

            // type your code here...

        // ========================================================================================================================
    }
}
