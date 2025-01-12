import styles from "./styles.module.css";
import { withSkeletonCategories } from "../../helpers/hocs/withSkeletonCategories";

function Categories({ categories, setSelectedCategory, selectedCategory }) {
  return (
    <div className={styles.categoriesBody}>
      <button
        onClick={() => setSelectedCategory(null)}
        className={!selectedCategory ? styles.activeCategory : styles.category}
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

const CategoriesWithSkeletonCategories = withSkeletonCategories(Categories);

export default CategoriesWithSkeletonCategories;
