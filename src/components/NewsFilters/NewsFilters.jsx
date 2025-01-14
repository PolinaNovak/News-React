import styles from "./styles.module.css";
import CategoriesWithSkeletonCategories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import Slider from "../Slider/Slider.jsx";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { getCategories } from "../../api/apiNews.js";

export default function NewsFilters({ filters, changeFilters, isLoading }) {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.newsFiltersBody}>
      <Slider>
        <CategoriesWithSkeletonCategories
          isLoading={isLoading && !dataCategories}
          categories={dataCategories && dataCategories.categories}
          setSelectedCategory={(category) =>
            changeFilters("category", category)
          }
          selectedCategory={filters.category}
        />
      </Slider>

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />
    </div>
  );
}
