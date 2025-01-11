const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
import { NEWS_SERVICE, NEWS_CATEGORY } from "../constants/api";
import axios from "axios";

export const getNews = async () => {
  try {
    const response = await axios.get(`${NEWS_SERVICE}`, {
      params: {
        apiKey: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
