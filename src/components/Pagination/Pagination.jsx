import styles from "./styles.module.css";

export default function Pagination({
  totalPages,
  handlePrevioustPage,
  handlePageClick,
  handleNextPage,
  currentPage,
}) {
  return (
    <div className={styles.paginationBody}>
      <button
        onClick={handlePrevioustPage}
        disabled={currentPage === 1 ? true : false}
      >
        {"<"}
      </button>
      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
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
        onClick={handleNextPage}
        disabled={currentPage === totalPages ? true : false}
      >
        {">"}
      </button>
    </div>
  );
}
