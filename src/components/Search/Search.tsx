import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

export default function Search({ keywords, setKeywords }: Props) {
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
