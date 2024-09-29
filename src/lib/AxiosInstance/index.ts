"use server"
import envConfig from "@/src/config/envConfig";

import  Axios  from "axios";
import { cookies } from "next/headers";

export const AxiosInstance = Axios.create({
    baseURL: envConfig.baseApi, 
    
  });


  // Add a request interceptor
  AxiosInstance.interceptors.request.use(
  
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if(accessToken){
      config.headers.Authorization = accessToken;
    }

  
  return config;
}, function (error) {
  
  return Promise.reject(error);
});


AxiosInstance.interceptors.response.use(function (response) {
 
  return response;
}, function (error) {
 
  return Promise.reject(error);
});