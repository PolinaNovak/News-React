import styles from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import NewsFilters from "../NewsFilters/NewsFilters";
import { TOTAL_PAGES } from "../../constants/constants";

function NewsByFilters({ filters, changeFilters, isLoading, news }) {
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

      <Pagination
        handlePages={handlePages}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />
    </section>
  );
}

export default NewsByFilters;
