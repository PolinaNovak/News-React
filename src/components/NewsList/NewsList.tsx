import styles from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../lib/hocs/withSkeleton";
import { INews } from "../../interfaces";

interface Props {
  news: INews[] | undefined;
}

function NewsList({ news }: Props) {
  return (
    <div className={styles.newsListBody}>
      {news?.map((elem) => {
        return <NewsItem key={elem.id} item={elem} />;
      })}
    </div>
  );
}

const newsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default newsListWithSkeleton;
