export default async function fetchData(url, mainStateFunc, errorFunc) {
  try {
    const response = await fetch(url, {
      mode: 'cors'
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    mainStateFunc(responseData.data);
  } catch (error) {
    errorFunc(error.message);
    console.error(error);
  }
}