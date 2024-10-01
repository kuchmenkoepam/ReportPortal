@Dashboard
Feature: Create Dashboard

  Scenario Outline: Verify New Dashboard modal opens after click on Add New Dashboard button
    Given I click on the "Dashboard" button in the main menu
    And I click on the Add New Dashboard button
    Then I set the dashboard name to "<name>"
    And I set the dashboard description to "<description>"
    And I click the Add button in the modal
    And I click on the "Dashboard" button in the main menu
    And I verify the Dashboard name "<name>" present
    And I click "Edit" icon with name "<name>" the Dashboard
    And I set the dashboard name to "<nameEdited>"
    And I click the Update button in the modal
    Then I verify the Dashboard name "<nameEdited>" present

  Examples:  
  | name         | nameEdited  | description         |
  | Project_name | Name_Edited | Project_Description |

  Scenario: Clear dashboard page
    And I clear the dashboard on the Report Portal