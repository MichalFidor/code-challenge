import { browser, ElementFinder } from 'protractor';

declare const protractor: any

export function waitForElementToBeVisible(protractorElement: ElementFinder) {
    return browser.wait(protractor.ExpectedConditions.visibilityOf(protractorElement));
}
