import styles from "./styles.module.css";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

export default function Main() {
  return (
    <main className={styles.mainBody}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
}
