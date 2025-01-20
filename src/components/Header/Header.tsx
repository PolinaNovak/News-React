import styles from "./styles.module.css";
import formatDate from "../../lib/functions/formatDate.js";
import { useTheme } from "../../contexts/ThemeContext/ThemeContext.js";

export default function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header className={styles.headerBody}>
      <h1 className={styles.title}>NEWS</h1>
      <p className={styles.time}>{formatDate(new Date())}</p>

      <img src={""} width={200} height={200} onClick={toggleTheme} />
    </header>
  );
}
