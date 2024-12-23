import axios from "axios";
import { config } from "../config";

export const UserService = {
  // TODO: write proper types
  inviteUser: async function (payload:object,token:unknown) { 
    try {
      const res = await axios.post(
        config.BASE_URL + config.INVITE_USER,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res;
    } catch (error) {
      return Promise.reject(error);  
    }
  },
  getUserEmailByLink: async function (token:unknown) {
    try {
      const res = await axios.get(
        config.BASE_URL + config.GET_EMAIL_BY_TOKEN + token
      );
      return res;
    } catch (error) {
      return Promise.reject(error);  
    }
  },
  getAllUsers: async function (token:unknown, page:number, limit:number) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.get(
        config.BASE_URL +
          config.FETCH_ALL_USERS +
          "?page=" +
          page +
          "&limit=" +
          limit,
        { headers }
      );
      return res.data;
    } catch (error) {
      return Promise.reject(error);  
    }
  },
  getAllCountries: async function (token:unknown) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.get(
        config.BASE_URL + config.FETCH_OPERATING_COUNTRIES,
        { headers }
      );
      return res.data.data;
    } catch (error) {
      return Promise.reject(error);  
    }
  },
  getUsersByCountries: async function (token:unknown,countryCode:string,page:number,limit:number) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.get(
        config.BASE_URL +
          config.FETCH_USERS_BY_COUNTRIES + countryCode +
          "?page=" +
          page +
          "&limit=" +
          limit,
        { headers }
      );
      return res.data;
    } catch (error) {
      return Promise.reject(error);  
    }
  },
};
