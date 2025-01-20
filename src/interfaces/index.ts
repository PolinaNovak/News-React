export interface INews {
  author: string;
  category: CategoriesType[];
  description?: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "column" | "row";

export type IParams = Partial<IFilters>;

export interface INewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface IpaginationProps {
  totalPages: number;
  currentPage: number;
  handlePages: (key: number) => void;
}

export interface ICategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export type CategoriesType =
  | "regional"
  | "technology "
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "opinion"
  | "health"
  | "politics"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "food"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
