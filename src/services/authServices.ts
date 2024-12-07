import axios from "axios";
import { config } from "../config";

export const AuthService = {
  loginUser: async function (payload) {
    try {
      const res = await axios.post(config.BASE_URL + config.LOGIN, payload);
      return res;
    } catch (e) {
      return e;
    }
  },
};
