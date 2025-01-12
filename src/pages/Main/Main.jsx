import styles from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import LatestNews from "../../components/LatestNews/LatestNews";
import Pagination from "../../components/Pagination/Pagination";
import CategoriesWithSkeletonCategories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { getNews, getCategories } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

export default function Main() {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, error, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={styles.mainBody}>
      <LatestNews banners={data && data.news} isLoading={isLoading} />

      <NewsByFilters
        news={data?.news}
        isLoading={isLoading}
        filters={filters}
        changeFilters={changeFilters}
      />
    </main>
  );
}
