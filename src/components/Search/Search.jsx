import styles from "./styles.module.css";

export default function Search({ keywords, setKeywords }) {
  return (
    <div className={styles.searchBody}>
      <input
        type="text"
        className={styles.keywords}
        value={keywords}
        onChange={(event) => setKeywords(event.target.value)}
        placeholder="Javascript"
      />
    </div>
  );
}
