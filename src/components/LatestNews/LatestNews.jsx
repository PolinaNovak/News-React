import styles from "./styles.module.css";
import BannersListWithSkeleton from "../BannerList/BannerList.jsx";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../api/apiNews";

function LatestNews() {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={styles.latestNewsBody}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}

export default LatestNews;
