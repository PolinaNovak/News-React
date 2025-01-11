import styles from "./styles.module.css";

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className={styles.categoriesBody}>
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
