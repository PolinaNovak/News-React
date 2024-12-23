const API_KEY = "4jHOdnrilxB7uTxQ3InrJv303NJkEudtCrOhgXEYb7OgYZAs";
const BASE_URL = "https://api.currentsapi.services/v1/search";
import { NEWS_SERVICE } from "../constants/api";
import axios from "axios";

export const getNews = async (page_number = 1, page_size = 10) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        page_number: page_number,
        page_size: page_size,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
