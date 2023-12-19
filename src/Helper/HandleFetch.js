const HandleFetchData = async (url, setterFunc) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("handleFetchData:", data);
  return setterFunc(data);
};

export default HandleFetchData;
