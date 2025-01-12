import styles from "./styles.module.css";

export default function Skeleton({
  count = 1,
  type = "banner",
  direction = "column",
}) {
  return (
    <div className={styles.skeletonBody}>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.columnList : styles.rowList
          }
        >
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className={type === "banner" ? styles.banner : styles.item}></li>
        </ul>
      )}
    </div>
  );
}
