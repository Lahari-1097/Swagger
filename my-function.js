export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Lahari says ${event.queryStringParameters.keyword}!`),
  };
  return response;
};
