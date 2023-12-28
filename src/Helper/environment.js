let BASE_URL = "http://localhost:3000";

//check for environment
if ((process.env.REACT_APP_ENV = "development")) {
  BASE_URL = "http://localhost:3000";
}
if ((process.env.REACT_APP_ENV = "production")) {
  BASE_URL = "https://tsv3-server-production.up.railway.app";
}

export { BASE_URL };
