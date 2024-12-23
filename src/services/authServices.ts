import axios, { AxiosError } from "axios";
import { config } from "../config";
import { LoginFormValues } from "@/types/loginTypes";


export const AuthService = {
  isAuthenticated : (token:unknown,role:unknown) => {
    if(token && role){
      return true;
    }
  },
  loginUser: async (payload:LoginFormValues) => {
    try {
      const res = await axios.post(config.BASE_URL + config.LOGIN, payload);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return Promise.reject(error);  
      } else {
        return Promise.reject(error); 
      }
    }
  }
};
