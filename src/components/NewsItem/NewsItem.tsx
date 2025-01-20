import styles from "./styles.module.css";
import { formatTimeAgo } from "../../lib/functions/formatTimeAgo.js";
import { INews } from "../../interfaces/index.js";

interface Props {
  item: INews;
}

export default function NewsItem({ item }: Props) {
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
