import { Page, expect, Locator } from '@playwright/test'

export async function clickElement(locator: Locator, elementName: string) {
    try {
        console.log(`CLICK: ${elementName}`);
        await locator.click();
        console.log(`CLICK SUCCESS: ${elementName}`);
    } catch (error) {
        console.error(`CLICK FAILED: ${elementName}`);
        throw new Error(`Cannot click '${elementName}': ${error}`);
    }
}
export async function fillElement(locator: Locator, value: string, name: string) {
    try {
        console.log(`FILL: ${name} -> "${value}"`);
        await locator.fill(value);
        await expect(locator).toHaveValue(value)
        const actual = await locator.inputValue();
        console.log(`FILL CHECK: ${name} VALUE = "${actual}"`);
    } catch (error) {
        throw new Error(`FILL FAILED: ${name}, VALUE="${value}"\n${error}`);
    }
}
export async function expectVisible(locator: Locator, name: string) {
    try {
        console.log(`CHECK VISIBLE: ${name}`);
        await expect(locator).toBeVisible();
        console.log(`VISIBLE OK: ${name}`);
    } catch (error) {
        throw new Error(` NOT VISIBLE: ${name}\n${error}`);
    }
}
export async function checkAttribute(locator: Locator, attributeName: string, expectedValue: string, elementName: string): Promise<void> {
    console.log(`CHECK ATTRIBUTE: ${elementName}.${attributeName} = "${expectedValue}"`);
    const value = await locator.getAttribute(attributeName);
    if (value !== expectedValue) {
        throw new Error(`${elementName}.${attributeName} is "${value}", expected "${expectedValue}"`);
    }
}
export async function expectText(locator: Locator, expectedText: string, elementName: string): Promise<void> {
    try {
        console.log(`EXPECT TEXT: ${elementName} = "${expectedText}"`);
        const actualText = await locator.textContent();
        if (actualText?.trim() === expectedText.trim()) {
            console.log(`TEXT MATCH: ${elementName} = "${actualText}"`);
        } else {
            throw new Error(`Expected "${expectedText}" but got "${actualText}"`);
        }
    } catch (error) {
        console.error(`TEXT EXPECTATION FAILED: ${elementName}`);
        throw new Error(`Text check failed for ${elementName}: ${error}`);
    }
}
export async function selectOption(
    locator: Locator,
    value: string | { label?: string; value?: string; index?: number },
    elementName: string
): Promise<void> {
    try {
        console.log(`SELECT OPTION: ${elementName} -> ${JSON.stringify(value)}`);
        await locator.selectOption(value);
        console.log(`SELECT SUCCESS: ${elementName}`);

        const selectedValue = await locator.inputValue();
        console.log(`SELECTED VALUE: ${elementName} = "${selectedValue}"`);
    } catch (error) {
        console.error(`SELECT FAILED: ${elementName}`);
        throw new Error(`Cannot select option in ${elementName}: ${error}`);
    }
}