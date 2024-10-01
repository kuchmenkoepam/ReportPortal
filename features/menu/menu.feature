@MainMenu
Feature: Navigation in the Main Menu

  Scenario: Navigate Launches
    When I click on the "Launches" button in the main menu
    Then I should be on the "Launches" page

  Scenario: Navigate Filters 
    When I click on the "Filters" button in the main menu
    Then I should be on the "Filters" page

  Scenario: Navigate Debug
    When I click on the "Debug" button in the main menu
    Then I should be on the "Debug" page

  Scenario: Navigate Project Members
    When I click on the "Project Members" button in the main menu
    Then I should be on the "Project Members" page

  Scenario: Navigate Project Settings
    When I click on the "Project Settings" button in the main menu
    Then I should be on the "Project Settings" page

  Scenario: Navigate Dashboard
    Given I click on the "Dashboard" button in the main menu
    Then I should be on the "Dashboard" page