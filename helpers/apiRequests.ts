const { getRequest, deleteRequest, createHeaders } = require('./axiosRequests');
require('dotenv').config();

const BASE_URL = `https://reportportal.epam.com/api/v1/${process.env.PROJECT_NAME}/dashboard`;
const AUTH_TOKEN = process.env.REPORT_PORTAL_KEY;

async function clearDashboard() {
  try {
    const headers = createHeaders(AUTH_TOKEN);

    // Получаем все элементы dashboard
    const data = await getRequest(BASE_URL, headers);
    const { content } = data;

    if (content.length > 0) {
      for (let item of content) {
        await deleteRequest(`${BASE_URL}/${item.id}`, headers);
      }
    } else {
      console.log("Dashboard is already empty.");
    }
  } catch (error) {
    console.error("Error clearing dashboard:", error.message);
  }
}

module.exports = { clearDashboard };
