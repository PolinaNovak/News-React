import styles from "./styles.module.css";
import formatDate from "../../helpers/formatDate.js";

export default function Header() {
  return (
    <header className={styles.headerBody}>
      <h1 className={styles.title}>NEWS</h1>
      <p className={styles.time}>{formatDate(new Date())}</p>
    </header>
  );
}
