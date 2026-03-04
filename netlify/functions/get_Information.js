exports.handler = async (event) => {
  try {
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API_KEY missing" })
      };
    }

    const input = event.queryStringParameters?.data;

    if (!input) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No IP or domain provided" })
      };
    }

    const paramKey = /[a-z]/i.test(input) ? "domain" : "ipAddress";

    const url =
      `https://geo.ipify.org/api/v2/country,city` +
      `?apiKey=${API_KEY}&${paramKey}=${encodeURIComponent(input)}`;

    console.log("Calling:", url);

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      console.error("GeoIP error:", data);
      return {
        statusCode: response.status,
        body: JSON.stringify(data)
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

  } catch (err) {
    console.error("Function error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch IP information",
        message: err.message
      })
    };
  }
};