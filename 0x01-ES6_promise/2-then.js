export default function handleResponseFromAPI(promise) {
  const errMessage = 'Got a response from the API';
  const fufilledObj = {
    status: 200,
    body: 'success',
  };

  return promise.then(() => fufilledObj)
    .catch(() => new Error())
    .finally(() => console.log(errMessage));
}
