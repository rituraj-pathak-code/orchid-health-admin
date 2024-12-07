import axios from "axios";
import { config } from "../config";

export const UserService = {
  inviteUser: async function (payload) {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(
        config.BASE_URL + config.INVITE_USER,
        payload,
        {
          headers: {
            'Authorization': `Bearer ${token}`, 
          }
        }
      );
      return res;
    } catch (e) {
      return e;
    }
  },
};
