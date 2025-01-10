exports.handler = async (event) => {
  // Extract specific properties from the event object
  const { resource, path, httpMethod, headers, queryStringParameters, body } = event;

  return {
    body: "Hello from Lambda and GitHub Actions!",
    statusCode: 200,
  };
};
