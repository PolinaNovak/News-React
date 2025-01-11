import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { getNews, getCategories } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

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

  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES)
      changeFilters("page_number", filters.page_number + 1);
  };

  const handlePrevioustPage = () => {
    if (filters.page_number > 1)
      changeFilters("page_number", filters.page_number - 1);
  };

  const handlePageClick = (pageNumber) => {
    changeFilters("page_number", pageNumber);
  };

  return (
    <main className={styles.mainBody}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          setSelectedCategory={(category) =>
            changeFilters("category", category)
          }
          selectedCategory={filters.category}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Pagination
        totalPages={TOTAL_PAGES}
        handlePrevioustPage={handlePrevioustPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={data?.news} />
    </main>
  );
}
