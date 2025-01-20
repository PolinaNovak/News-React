import styles from "./styles.module.css";
import BannersListWithSkeleton from "../BannerList/BannerList.js";
import { useFetch } from "../../lib/hooks/useFetch.js";
import { getLatestNews } from "../../api/apiNews.js";
import { INewsApiResponse } from "../../interfaces/index.js";

function LatestNews() {
  const { data, isLoading } = useFetch<INewsApiResponse, null>(getLatestNews);

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
