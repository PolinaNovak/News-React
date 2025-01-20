import styles from "./styles.module.css";
import React, { useRef } from "react";

interface Props {
  children: React.ReactElement;
  step?: number;
}

export default function Slider({ children, step = 300 }: Props) {
  const sliderRef = useRef<HTMLElement | null>(null);
  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft - step,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + step,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.sliderBody}>
      <button className={styles.arrow} onClick={scrollLeft}>
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button className={styles.arrow} onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
}
