import styles from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";

export default function NewsList({ news }) {
  return (
    <div className={styles.newsListBody}>
      {news.map((elem) => {
        return <NewsItem key={elem.id} item={elem} />;
      })}
    </div>
  );
}
