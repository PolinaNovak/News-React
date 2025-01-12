import styles from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import NewsFilters from "../NewsFilters/NewsFilters";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants";
import { getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

function NewsByFilters() {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const handlePages = (value) => {
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
