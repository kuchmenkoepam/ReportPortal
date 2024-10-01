const { Given, When, Then } = require('@cucumber/cucumber');
const AddDashboardModalPage = require('../pages/addDashboardModal.page');

const addDashboardModalPage = new AddDashboardModalPage();

Then(/^I should see the Add New Dashboard modal$/, async () => {
  await addDashboardModalPage.isModalDisplayed();
});

When(/^I set the dashboard name to "([^"]*)"$/, async (name) => {
  await addDashboardModalPage.setName(name);
});

When(/^I set the dashboard description to "([^"]*)"$/, async (description) => {
  await addDashboardModalPage.setDescription(description);
});

When(/^I click the Add button in the modal$/, async () => {
  await addDashboardModalPage.clickAddButton();
});

When(/^I click the Update button in the modal$/, async () => {
  await addDashboardModalPage.clickUpdateButton();
});

When(/^I click the Cancel button in the modal$/, async () => {
  await addDashboardModalPage.clickCancelButton();
});

When(/^I close the Add New Dashboard modal$/, async () => {
  await addDashboardModalPage.closeModal();
});
