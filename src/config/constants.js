import Axios from "axios";

// export const base_url = "http://localhost:5001";
// export const base_url = "http://api.affiliatedrefer.com/";
export const base_url = "https://api.affiliatedrefer.com/";

export const publicAPI = Axios.create({ baseURL: base_url });

export const privateAPI = Axios.create({ baseURL: base_url });

export const attachToken = async () => {
  const jwt = localStorage.getItem("token");
  privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  // console.log("Token Attached");
};
