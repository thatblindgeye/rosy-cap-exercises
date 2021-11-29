export default async function fetchData(url, setStateFunction, setErrorFunction) {
  try {
    const response = await fetch(url, {
      mode: 'cors'
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    setStateFunction(responseData.data);
  } catch (error) {
    setErrorFunction(error.message);
    console.error(error);
  }
}