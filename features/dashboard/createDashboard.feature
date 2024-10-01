@Dashboard
Feature: Create Dashboard

  Scenario: Verify New Dashboard modal opens after click on Add New Dashboard button
    Given I click on the "Dashboard" button in the main menu
    And I should be on the "Dashboard" page
    And I click on the Add New Dashboard button
    When I should see the Add New Dashboard modal

  Scenario Outline: Verify additional fields Dashboard appears after adding new dashboard
    Then I set the dashboard name to "<name>"
    And I set the dashboard description to "<description>"
    And I click the Add button in the modal
    And I click on the "Dashboard" button in the main menu
    When I verify the Dashboard name "<name>" present

  Examples:  
  | name         | description         |
  | Project_name | Project_Description |

  Scenario: Clear dashboard page
    And I clear the dashboard on the Report Portal


