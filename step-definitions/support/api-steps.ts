const { When } = require('@cucumber/cucumber');
const { clearDashboard } = require('../../helpers/apiRequests');

When('I clear the dashboard on the Report Portal', async function() {
  await clearDashboard();
});


