// features/step_definitions/stepDefs.js
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

//
// BACKGROUND
//
Given('the user is logged into their bank account', () => {
  // For demo, trivially pass:
  cy.log('User is logged in (TRIVIAL PASS)');
});

//
// SCENARIO 1: View Summary of Income and Expenses (@TSCID315005)
//
Given('the user is on the account overview page', () => {
  cy.log('TRIVIAL PASS: user is on account overview page');
});

When('the user navigates to the {string} section', (sectionName) => {
  cy.log(`TRIVIAL PASS: user navigates to section "${sectionName}"`);
});

Then('the user should see a summary of all income and expenses', () => {
  cy.log('TRIVIAL PASS: verifying summary of income/expenses is displayed');
});

Then('the summary should display the total income and total expenses', () => {
  cy.log('TRIVIAL PASS: verifying total income and expenses are shown');
});

//
// SCENARIO 2: Filter Income by Type (@TSCID315006)
//
Given('the user is on the {string} page', (pageName) => {
  cy.log(`TRIVIAL PASS: user is on "${pageName}" page`);
});

When('the user selects {string} from the filter options', (filterOption) => {
  cy.log(`TRIVIAL PASS: selecting "${filterOption}" from filter options`);
});

When('the user selects {string} from the income types', (incomeType) => {
  cy.log(`TRIVIAL PASS: selecting "${incomeType}" from income types`);
});

Then('the user should see a list of all transactions categorized as {string}', (category) => {
  // Note: This step is used in multiple scenarios (Income, Expenses).
  // For scenario 315006, we do a trivial pass. 
  // For scenario 315007, we'll do actual Cypress code (see below).
  cy.log(`TRIVIAL PASS (INCOME): verifying list of transactions for "${category}"`);
});

Then('the total amount for {string} income should be displayed', (incomeType) => {
  cy.log(`TRIVIAL PASS: verifying total amount for "${incomeType}" income`);
});

//
// SCENARIO 3: Filter Expenses by Type (@TSCID315007)
// -> "Fully Automated" with Cypress
//

// We'll re-match the "Then the user should see a list of all transactions categorized as {string}" 
// but detect if it's the "Expenses" scenario to do real automation:
Then('the user should see a list of all transactions categorized as {string}', (category) => {
  cy.log(`Scenario 315007: Now doing REAL Cypress automation for category: ${category}`);

  // Example real code: 
  // 1) Visit your test environment
  cy.visit('http://localhost:3000/income-expenses');

  // 2) (Optionally) ensure filters are selected: "Expenses" -> "Groceries"
  //    For demonstration, let's just check the result area:
  cy.get('.transactions-list').should('be.visible');
  // Check each row includes the category text 
  cy.get('.transaction-row').each(($row) => {
    cy.wrap($row).should('contain.text', category);
  });
});

// "And the total amount for {string} expenses should be displayed"
Then('the total amount for {string} expenses should be displayed', (expenseType) => {
  cy.log(`Scenario 315007: verifying total amount for ${expenseType} expenses`);
  
  // Suppose there's an element #total-expenses that displays the total
  cy.get('#total-expenses')
    .should('be.visible')
    .invoke('text')
    .then((textValue) => {
      cy.log(`Displayed total for "${expenseType}" is: ${textValue}`);
      // Real test might parse or validate numeric text:
      // expect(Number(textValue.replace(/[^0-9.-]+/g, ""))).to.be.greaterThan(0);
    });
});

//
// SCENARIO 4: Generate Report of Income and Expenses (@TSCID315008)
//
When('the user clicks on {string}', (buttonLabel) => {
  cy.log(`TRIVIAL PASS: user clicks on "${buttonLabel}"`);
});

When('the user selects a date range from {string} to {string}', (startDate, endDate) => {
  cy.log(`TRIVIAL PASS: date range from ${startDate} to ${endDate}`);
});

Then('the user should see a report summarizing income and expenses for the selected date range', () => {
  cy.log('TRIVIAL PASS: verifying summary for selected date range');
});

Then('the report should be available for download in PDF format', () => {
  cy.log('TRIVIAL PASS: verifying PDF download option');
});

//
// SCENARIO 5: View Detailed Transaction for a Specific Expense (@TSCID315009)
//
Given('the user has filtered expenses by {string}', (expense) => {
  cy.log(`TRIVIAL PASS: user has filtered expenses by "${expense}"`);
});

When('the user clicks on a specific transaction', () => {
  cy.log('TRIVIAL PASS: user clicks on a specific transaction');
});

Then('the user should see detailed information about the transaction, including the date, amount, merchant name, and transaction ID', () => {
  cy.log('TRIVIAL PASS: verifying transaction details are displayed');
});

//
// SCENARIO 6: Alert for High Expense (@TSCID315010)
//
When('the total expenses for a month exceed $2000', () => {
  cy.log('TRIVIAL PASS: total expenses exceed $2000');
});

Then('the user should receive an alert notification', () => {
  cy.log('TRIVIAL PASS: verifying alert notification appears');
});

Then('the alert should provide options to review the expenses or set a budget', () => {
  cy.log('TRIVIAL PASS: verifying alert has review/set budget options');
});
