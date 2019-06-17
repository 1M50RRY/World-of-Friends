import axios from 'axios'
axios.defaults.withCredentials = true;
const headers = { headers: { "Access-Control-Allow-Origin": "*", } };

export const axiosGet = async (url, data = {}) => await axios.get(url, data, headers);
export const axiosPost = async (url, data = {}) => await axios.post(url, data, headers);
