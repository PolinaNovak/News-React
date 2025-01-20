import styles from "./styles.module.css";
import CategoriesWithSkeletonCategories from "../Categories/Categories.js";
import Search from "../Search/Search.js";
import Slider from "../Slider/Slider.js";
import { useFetch } from "../../lib/hooks/useFetch.js";
import { getCategories } from "../../api/apiNews.js";
import { ICategoriesApiResponse, IFilters } from "../../interfaces/index.js";

interface Props {
  filters: IFilters;
  changeFilters: (key: string, value: string | number | null) => void;
  isLoading: boolean;
}

export default function NewsFilters({
  filters,
  changeFilters,
  isLoading,
}: Props) {
  const { data: dataCategories } = useFetch<ICategoriesApiResponse, null>(
    getCategories
  );

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
