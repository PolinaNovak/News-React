import styles from "./styles.module.css";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import NewsFilters from "../NewsFilters/NewsFilters";
import { TOTAL_PAGES, PAGE_SIZE } from "../../lib/constants/constants";
import { getNews } from "../../api/apiNews";
import { useDebounce } from "../../lib/hooks/useDebounce";
import { useFetch } from "../../lib/hooks/useFetch";
import { useFilters } from "../../lib/hooks/useFilters";
import { INewsApiResponse, IParams } from "../../interfaces";

function NewsByFilters() {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<INewsApiResponse, IParams>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const handlePages = (value: number) => {
    switch (value) {
      case -1: {
        if (filters.page_number > 1)
          changeFilters("page_number", filters.page_number - 1);
        break;
      }

      case 1: {
        if (filters.page_number < TOTAL_PAGES)
          changeFilters("page_number", filters.page_number + 1);
        break;
      }

      default: {
        changeFilters("page_number", value);
        break;
      }
    }
  };

  return (
    <section className={styles.newsByFiltersBody}>
      <NewsFilters
        filters={filters}
        changeFilters={changeFilters}
        isLoading={isLoading}
      />

      <PaginationWrapper
        top
        bottom
        handlePages={handlePages}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
}

export default NewsByFilters;
