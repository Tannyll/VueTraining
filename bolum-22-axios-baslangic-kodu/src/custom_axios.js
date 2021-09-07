import axios from 'axios';

const instance = axios.create({ baseURL: "https://tannyll-default-rtdb.europe-west1.firebasedatabase.app", timeout: 1000, headers: { 'X-Custom-Header': 'foobar' } })

// TODO : AXIOS https://github.com/axios/axios
// instance.defaults.baseURL = "https://tannyll-default-rtdb.europe-west1.firebasedatabase.app";
// instance.defaults.headers.common["Authorization"] = "custom_auth_key";
// instance.defaults.headers.get["Accepts"] = "application/json";

export default instance;