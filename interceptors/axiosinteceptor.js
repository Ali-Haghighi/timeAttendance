import axios from "axios";
// axios.defaults.baseURL = "";
// axios.defaults.withCredentials = true;
import { Authenticated_contex } from "../store/context/authenticated_contex";
import { cos } from "react-native-reanimated";
import { useState, useEffect, useRef, useContext } from "react";
import { Alert } from "react-native";
const baseURL = "";
const axiosdata = axios.create({
  baseURL: ``,
  withCredentials: true,
})
export const axiosinterceptor =async ({ ...reqestDAta }) => {

  try {
    const response = await (axiosdata(reqestDAta))
    return (response)
  }
  catch (err) {
    const errResponse = JSON.stringify(err)
    const errResponsejs = JSON.parse(errResponse)
    
    return (errResponsejs)
 
  }

}



// axaxiosios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });





