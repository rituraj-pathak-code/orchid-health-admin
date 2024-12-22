import axios from "axios";
import { config } from "../config";

export const UserService = {
  // TODO: write proper types
  inviteUser: async function (payload:object) { 
    const token = localStorage.getItem("token");
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
    } catch (e) {
      return e;
    }
  },
  getUserEmailByLink: async function (token:string) {
    try {
      const res = await axios.get(
        config.BASE_URL + config.GET_EMAIL_BY_TOKEN + token
      );
      return res;
    } catch (e) {
      return e;
    }
  },
  getAllUsers: async function (token:string, page:number, limit:number) {
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
      return res;
    } catch (e) {
      return e;
    }
  },
  getAllCountries: async function (token:string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.get(
        config.BASE_URL + config.FETCH_OPERATING_COUNTRIES,
        { headers }
      );
      return res;
    } catch (e) {
      return e;
    }
  },
  getUsersByCountries: async function (token:string,countryCode:string,page:number,limit:number) {
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
      return res;
    } catch (e) {
      return e;
    }
  },
};
