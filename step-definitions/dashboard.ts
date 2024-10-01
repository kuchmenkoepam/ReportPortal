const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../pageObjects/dashboard.page');

When(/^I click on the Add New Dashboard button$/, async () => {
  await DashboardPage.clickAddNewDashboard();
});

When(/^I click "Edit" icon with name "([^"]*)" the Dashboard$/, async (name: string) => {
  await DashboardPage.clickEditDashboardButton(name);
});

Then(/^I verify the Dashboard name "([^"]*)" present$/, async (name: string) => {
  await DashboardPage.isDashboardNamePresent(name);
});
