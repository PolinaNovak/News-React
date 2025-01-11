import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";

export default function NewsItem({ item }) {
  return (
    <li className={styles.newsItemBody}>
      <div
        className={styles.itemImage}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.itemTitle}>{item?.title}</h3>
        <p className={styles.itemAuthor}>
          {formatTimeAgo(item?.published)} by {item?.author}
        </p>
      </div>
    </li>
  );
}
