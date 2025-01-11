import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";
import Image from "../Image/Image.jsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";

function NewsBanner({ item }) {
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
