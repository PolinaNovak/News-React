import styles from "./styles.module.css";
import React, { useRef } from "react";

export default function Slider({ children, step = 300 }) {
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft - step,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
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
