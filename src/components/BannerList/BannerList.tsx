import styles from "./styles.module.css";
import NewsBanner from "../NewsBanner Components/NewsBanner/NewsBanner.js";
import withSkeleton from "../../lib/hocs/withSkeleton.js";
import { INews } from "../../interfaces/index.js";

interface Props {
  banners?: INews[] | null;
}
function BannersList({ banners }: Props) {
  return (
    <ul className={styles.bannersListBody}>
      {banners?.map((elem) => {
        return <NewsBanner key={elem.id} item={elem} />;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  6,
  "row"
);

export default BannersListWithSkeleton;
