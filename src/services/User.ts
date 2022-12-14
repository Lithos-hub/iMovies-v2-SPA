import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/User";
import { Api } from "./Api";
const API = new Api();

export default {
  async getUser() {
    API.setJsonHeader();
    const { USER_ID } = storeToRefs(useUserStore());
    const { data } = await API.get(`users/${USER_ID.value}`);
    return data;
  },
  async updateUser(userData: Record<string, string>) {
    API.setAuthorization();
    API.setJsonHeader();
    const { USER_ID } = storeToRefs(useUserStore());
    const { data } = await API.put(`users/${USER_ID.value}`, userData);
    return data;
  },
};
