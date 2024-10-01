const axios = require('axios');

async function getRequest(url, headers) {
  try {
    const response = await axios({
      method: 'get',
      url: url,
      headers: headers
    });
    return response.data;
  } catch (error) {
    console.error(`Error in GET request: ${error.message}`);
    throw error;
  }
}

async function deleteRequest(url, headers) {
  try {
    await axios({
      method: 'delete',
      url: url,
      headers: headers
    });
    console.log(`Deleted resource at ${url}`);
  } catch (error) {
    console.error(`Error in DELETE request: ${error.message}`);
    throw error;
  }
}

function createHeaders(authToken) {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  };
}

module.exports = {
  getRequest,
  deleteRequest,
  createHeaders
};