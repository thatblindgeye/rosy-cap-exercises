export default async function fetchData(url, mainStateFunction, errorFunction) {
  try {
    const response = await fetch(url, {
      mode: 'cors'
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    mainStateFunction(responseData.data);
  } catch (error) {
    errorFunction(error.message);
    console.error(error);
  }
}