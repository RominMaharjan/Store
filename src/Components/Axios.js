import axios from "axios";

export const axiosClient = axios.create({
    baseURL: `https://uat.ordering-farmshop.ekbana.net`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
      "Warehouse-Id": 1,   
    },
  });