const axios = require("axios");

exports.handler = async (event) => {
  try {
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "API key is missing in environment variables"
        })
      };
    }

    console.log("API Key Status:", API_KEY ? "Loaded" : "Missing");

    const params = event.queryStringParameters || {};
    const input = params.data ? params.data.trim() : null;

    if (!input) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "No IP address or domain provided"
        })
      };
    }

    // Determine if input is domain or IP
    const isDomain = /[a-z]/i.test(input);
    const paramKey = isDomain ? "domain" : "ipAddress";

    const config = {
      params: {
        apiKey: API_KEY,
        [paramKey]: input
      }
    };

    const response = await axios.get(
      "https://geo.ipify.org/api/v2/country,city",
      config
    );

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(response.data)
    };

  } catch (err) {

    const errorDetails = err.response ? err.response.data : err.message;

    console.error("Axios Error:", errorDetails);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch IP information",
        details: errorDetails,
        debug_received: event.queryStringParameters?.data || null
      })
    };
  }
};