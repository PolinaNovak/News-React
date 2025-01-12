import styles from "./styles.module.css";
import NewsBanner from "../NewsBanner Components/NewsBanner/NewsBanner.jsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";

function BannersList({ banners }) {
  return (
    <ul className={styles.bannersListBody}>
      {banners?.map((elem) => {
        return <NewsBanner key={elem.id} item={elem} />;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 6, "row");

export default BannersListWithSkeleton;
