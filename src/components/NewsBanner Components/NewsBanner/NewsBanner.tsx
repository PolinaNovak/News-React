import styles from "./styles.module.css";
import { formatTimeAgo } from "../../../lib/functions/formatTimeAgo.js";
import Image from "../Image/Image.js";
import withSkeleton from "../../../lib/hocs/withSkeleton.js";
import { INews } from "../../../interfaces/index.js";

interface Props {
  item: INews;
}

function NewsBanner({ item }: Props) {
  return (
    <div className={styles.bannerBody}>
      <Image image={item?.image} />
      <h3 className={styles.itemTitle}>{item?.title}</h3>
      <p className={styles.itemAuthor}>
        {formatTimeAgo(item?.published)} by {item?.author}
      </p>
    </div>
  );
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
