import styles from "./styles.module.css";
import BannersListWithSkeleton from "../BannerList/BannerList.jsx";

function LatestNews({ banners, isLoading }) {
  return (
    <section className={styles.latestNewsBody}>
      <BannersListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
