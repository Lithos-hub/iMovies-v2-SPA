import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/User";
import { Api } from "./Api";

const API = new Api();

export default {
  async getMoviesByUserId() {
    const { USER_ID } = storeToRefs(useUserStore());
    const { data } = await API.get(`movies/${USER_ID.value}`);
    return data;
  },
  async postMovie(id: number | string, category: "favourite" | "wishlist") {
    API.setAuthorization();
    API.setJsonHeader();
    const movieData = {
      id,
      category,
    };
    const { data } = await API.post(`movies/${category}`, movieData);
    return data;
  },
  async removeMovie(id: number, category: "favourite" | "wishlist") {
    API.setAuthorization();
    API.setJsonHeader();
    const movieData = {
      id,
      category,
    };
    const { data } = await API.delete(`movies/${category}`, movieData);
    return data;
  },
};