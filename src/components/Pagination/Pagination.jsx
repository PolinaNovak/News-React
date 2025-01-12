import styles from "./styles.module.css";

export default function Pagination({ totalPages, currentPage, handlePages }) {
  return (
    <div className={styles.paginationBody}>
      <button
        onClick={() => handlePages(-1)}
        disabled={currentPage === 1 ? true : false}
      >
        {"<"}
      </button>
      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePages(index + 1)}
              className={currentPage === index + 1 ? styles.currentPage : null}
              disabled={currentPage === index + 1 ? true : false}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => handlePages(1)}
        disabled={currentPage === totalPages ? true : false}
      >
        {">"}
      </button>
    </div>
  );
}
