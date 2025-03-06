#Auto generated Octane revision tag
@BSPID52004REV0.1.0
Feature: Present Income and Expenses by Type
  As a bank customer
  I want to view my income and expenses categorized by type
  So that I can manage my finances effectively

  Background:
    Given the user is logged into their bank account

@TSCID315005
  Scenario: View Summary of Income and Expenses
    Given the user is on the account overview page
    When the user navigates to the "Income and Expenses" section
    Then the user should see a summary of all income and expenses
    And the summary should display the total income and total expenses

@TSCID315006
  Scenario: Filter Income by Type
    Given the user is on the "Income and Expenses" page
    When the user selects "Income" from the filter options
    And the user selects "Salary" from the income types
    Then the user should see a list of all transactions categorized as "Salary"
    And the total amount for "Salary" income should be displayed

@TSCID315007
  Scenario: Filter Expenses by Type
    Given the user is on the "Income and Expenses" page
    When the user selects "Expenses" from the filter options
    And the user selects "Groceries" from the expense types
    Then the user should see a list of all transactions categorized as "Groceries"
    And the total amount for "Groceries" expenses should be displayed

@TSCID315008
  Scenario: Generate Report of Income and Expenses
    Given the user is on the "Income and Expenses" page
    When the user clicks on "Generate Report"
    And the user selects a date range from "01/01/2024" to "06/30/2024"
    Then the user should see a report summarizing income and expenses for the selected date range
    And the report should be available for download in PDF format

@TSCID315009
  Scenario: View Detailed Transaction for a Specific Expense
    Given the user has filtered expenses by "Groceries"
    When the user clicks on a specific transaction
    Then the user should see detailed information about the transaction, including the date, amount, merchant name, and transaction ID

@TSCID315010
  Scenario: Alert for High Expense
    Given the user is on the "Income and Expenses" page
    When the total expenses for a month exceed $2000
    Then the user should receive an alert notification
    And the alert should provide options to review the expenses or set a budget
