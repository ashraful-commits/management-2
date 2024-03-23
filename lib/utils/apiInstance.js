import axios from "axios";


// TODO: Change the URL from V1 to V5 once BE API is available
const instance = axios.create({
  baseURL: 'https://staging-be.smasherson.com/api/v1',
  timeout: 30000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const fetcher = async (url) => {
  return instance.get(url).then((res) => {
    if (!res.data) {
      throw Error(res.data.message);
    }
    return res.data;
  });
};

export default instance;
