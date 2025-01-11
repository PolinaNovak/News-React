import styles from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton";

function NewsList({ news }) {
  return (
    <div className={styles.newsListBody}>
      {news.map((elem) => {
        return <NewsItem key={elem.id} item={elem} />;
      })}
    </div>
  );
}

const newsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default newsListWithSkeleton;
