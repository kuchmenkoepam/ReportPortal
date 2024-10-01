const { Given, When, Then } = require('@wdio/cucumber-framework');
const MainMenuPage = require('../pageObjects/mainMenu.page');


When('I click on the "Dashboard" button in the main menu', async function () {
    await MainMenuPage.clickDashboard();
});

Then('I should be on the "Dashboard" page', async function () {
   await MainMenuPage.isDashboardActive();
});

When('I click on the "Launches" button in the main menu', async function () {
    await MainMenuPage.clickLaunches();
});

Then('I should be on the "Launches" page', async function () {
    await MainMenuPage.isLaunchesActive();
});

When('I click on the "Debug" button in the main menu', async function () {
    await MainMenuPage.clickDebug();
});

Then('I should be on the "Debug" page', async function () {
    await MainMenuPage.isDebugActive();
});

When('I click on the "Filters" button in the main menu', async function () {
  await MainMenuPage.clickFilters();
});

Then('I should be on the "Filters" page', async function () {
  await MainMenuPage.isFiltersActive();
});

When('I click on the "Project Members" button in the main menu', async function () {
    await MainMenuPage.clickProjectMembers();
});

Then('I should be on the "Project Members" page', async function () {
  await MainMenuPage.isProjectMembersActive();
});

When('I click on the "Project Settings" button in the main menu', async function () {
    await MainMenuPage.clickProjectSettings();
});

Then('I should be on the "Project Settings" page', async function () {
  await MainMenuPage.isProjectSettingsActive();
});