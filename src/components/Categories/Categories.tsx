import styles from "./styles.module.css";
import { withSkeletonCategories } from "../../lib/hocs/withSkeletonCategories";
import { ForwardedRef, forwardRef } from "react";
import { CategoriesType } from "../../interfaces";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categoriesBody}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={
            !selectedCategory ? styles.activeCategory : styles.category
          }
        >
          All
        </button>
        {categories.map((elem) => {
          return (
            <button
              onClick={() => setSelectedCategory(elem)}
              key={elem}
              className={
                selectedCategory === elem
                  ? styles.activeCategory
                  : styles.category
              }
            >
              {elem}
            </button>
          );
        })}
      </div>
    );
  }
);

const CategoriesWithSkeletonCategories = withSkeletonCategories(Categories);

export default CategoriesWithSkeletonCategories;
