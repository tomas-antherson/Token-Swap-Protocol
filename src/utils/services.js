import axios from "axios";
import { getItem } from "./session";
import toast from "react-hot-toast";

const makeRequest = async (method, endPoint, data, header) => {
  try {
    let headers = header || {};
    if (getItem("access_token")) {
      headers = {
        ...headers,
        Authorization: `${getItem("access_token")}`,
      };
    }

    return await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/api`,
      url: endPoint,
      method,
      data,
      headers: {
        ...headers,
      },
    });
  } catch (error) {
    if (endPoint !== '/auth/verifytoken') {

      if (error.response) {
        console.log(error.response.data);
        toast.error(error.response.data ? error.response.data.message : "Server error!");

      }
    }
  }
};

// GET
export const getService = async (endPoint) =>
  makeRequest("GET", endPoint, null);

// POST
export const postService = async (endPoint, reqest, header) =>
  makeRequest("POST", endPoint, reqest, header);

// PUT
export const putService = async (endPoint, reqest) =>
  makeRequest("PUT", endPoint, reqest);

// PATCH
export const patchService = async (endPoint, reqest) =>
  makeRequest("PATCH", endPoint, reqest);

// DELETE
export const deleteService = async (endPoint) =>
  makeRequest("DELETE", endPoint, null);
