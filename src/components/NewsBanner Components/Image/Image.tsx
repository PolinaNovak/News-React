import styles from "./styles.module.css";

interface Props {
  image: string;
}
export default function Image({ image }: Props) {
  return (
    <div className={styles.imageBody}>
      {image ? <img src={image} alt="News" className={styles.image} /> : null}
    </div>
  );
}
