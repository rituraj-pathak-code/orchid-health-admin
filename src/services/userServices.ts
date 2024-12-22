import axios from "axios";
import { config } from "../config";

export const UserService = {
  inviteUser: async function (payload) {
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
  getUserEmailByLink: async function (token) {
    try {
      const res = await axios.get(
        config.BASE_URL + config.GET_EMAIL_BY_TOKEN + token
      );
      return res;
    } catch (e) {
      return e;
    }
  },
  getAllUsers: async function (token, page, limit) {
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
  getAllCountries: async function (token) {
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
  getUsersByCountries: async function (token,countryCode,page,limit) {
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
