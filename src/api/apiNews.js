const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
import { NEWS_SERVICE, NEWS_CATEGORY } from "../constants/api";
import axios from "axios";

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
}) => {
  try {
    const response = await axios.get(NEWS_SERVICE, {
      params: {
        apiKey: API_KEY,
        page_number: page_number,
        page_size: page_size,
        category,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async () => {
  try {
    const response = await axios.get(NEWS_CATEGORY, {
      params: {
        apiKey: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
