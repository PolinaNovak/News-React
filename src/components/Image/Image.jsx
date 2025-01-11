import styles from "./styles.module.css";
export default function Image({ image }) {
  return (
    <div className={styles.imageBody}>
      {image ? <img src={image} alt="News" className={styles.image} /> : null}
    </div>
  );
}
