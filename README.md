# assertionsIntro.spec.js
This file demonstrates core assertion techniques in Playwright, focusing on validating the state and behavior of UI components using both built-in .toBe... and manual expect(...) checks. The tests are structured within a test.describe block to group related test cases.


# ✅ Key Features Covered:
# 🔹 beforeEach() Hook
Each test begins by visiting the website https://practice.cydeo.com/
and verifying the page title using two assertion methods:
toHaveTitle("Practice") – built-in Playwright assertion.
expect(await page.title()).toBe("Practice") – standard JavaScript assertion.

# 🧪 Test Case: "Verify checkboxes are checked"
# Navigates to the "Checkboxes" page.

Locates checkbox inputs #box1 and #box2.
Checks both checkboxes.
Validates that both are checked using:
.toBeChecked() (Playwright assertion)
.isChecked() + expect(...).toBeTruthy() (manual check)

# 🧪 Test Case: "Verify checkboxes are unchecked"
# Navigates again to the "Checkboxes" page.
Unchecks both checkboxes.
Asserts they are not checked using:
.not.toBeChecked()
.isChecked() + expect(...).toBeFalsy()

# 🧪 Test Case: "Verify text of the element"
# Locates the main header with selector span.h1y.
Asserts the inner text is "Test Automation Practice" using:
toHaveText(...)
innerText() + expect(...).toEqual(...)

# 🧠 Educational Purpose
# This script is a great learning tool for:
Understanding Playwright's powerful and fluent assertion syntax.
Comparing Playwright native assertions vs manual JavaScript logic.
Practicing checkbox interaction and text validation.
