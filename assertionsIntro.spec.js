import { test, expect } from "@playwright/test"; // for assortions we add "expect"

test.describe("Test group", () => {
  //create before each and navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    // veryfining the Title
    // 1. method: toHaveTitle()
    await expect(page).toHaveTitle("Practice");
    // 2. method: toBe()
    expect(await page.title()).toBe("Practice");
  });
  test("Veryfy checkboxes are checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let fisrtCheckbox = page.locator("input#box1");
    let secondCheckbox = page.locator("input#box2");

    await fisrtCheckbox.check();
    await secondCheckbox.check();
    // Verify that the checkboxes are checked, for that we use assertions
    // 1. method: toBeChecked()
    await expect(fisrtCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();
    //------------------------------------------------------------
    // 2. method: toNotBeChecked()

    expect(await fisrtCheckbox.isChecked()).toBeTruthy();
    expect(await secondCheckbox.isChecked()).toBeTruthy();
  });
  //Veryfy checkboxes are unchecked
  test("Veryfy checkboxes are unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let fisrtCheckbox = page.locator("input#box1");
    let secondCheckbox = page.locator("input#box2");
    await fisrtCheckbox.uncheck();
    await secondCheckbox.uncheck();
    // Verify that the checkboxes are unchecked, for that we use assertions
    // 1. method: toNotBeChecked()
    await expect(fisrtCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();
    //------------------------------------------------------------
    // 2. method: toBeChecked()
    expect(await fisrtCheckbox.isChecked()).toBeFalsy();
    expect(await secondCheckbox.isChecked()).toBeFalsy();
  });

  test("Verify text of the element", async ({ page }) => {
    let headerElement = page.locator("span.h1y");
    await expect(headerElement).toHaveText("Test Automation Practice");

    let actualText = await headerElement.innerText();
    await expect(actualText).toEqual("Test Automation Practice");
  });
});
