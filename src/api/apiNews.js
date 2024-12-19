const API_KEY = "4jHOdnrilxB7uTxQ3InrJv303NJkEudtCrOhgXEYb7OgYZAs";
const BASE_URL = "https://api.currentsapi.services/v1/latest-news";
import { NEWS_SERVICE } from "../constants/api";
import axios from "axios";

export const getNews = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
      },
    });

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
