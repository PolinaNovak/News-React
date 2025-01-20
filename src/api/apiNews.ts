const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
import {
  ICategoriesApiResponse,
  INewsApiResponse,
  IParams,
} from "../interfaces";

import { NEWS_SERVICE, NEWS_CATEGORY, NEWS_LATEST_SERVICE } from "../lib/api";
import axios from "axios";

enum Status {
  Error = "error",
  Ok = "ok",
}

export const getNews = async (params?: IParams): Promise<INewsApiResponse> => {
  try {
    const {
      page_number = 1,
      page_size = 10,
      category,
      keywords,
    } = params || {};

    const response = await axios.get<INewsApiResponse>(`${NEWS_SERVICE}`, {
      params: {
        apiKey: API_KEY,
        page_number: page_number,
        page_size: page_size,
        category: category,
        keywords: keywords,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: Status.Error };
  }
};

export const getCategories = async (): Promise<ICategoriesApiResponse> => {
  try {
    const response = await axios.get<ICategoriesApiResponse>(
      `${NEWS_CATEGORY}`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return { categories: [], description: "", status: Status.Error };
  }
};

export const getLatestNews = async (): Promise<INewsApiResponse> => {
  try {
    const response = await axios.get<INewsApiResponse>(
      `${NEWS_LATEST_SERVICE}`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: Status.Error };
  }
};
