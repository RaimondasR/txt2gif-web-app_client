import React from "react";
import styles from "./HeaderComp.module.css";

const HeaderComp = () => {
  return (
    <div className={styles.header_comp}>
      <div className={styles.div_wrap}>
        <div className={styles.fs26}>
          <b>Text to GIF Web Application</b>
        </div>
        <div className={styles.fs18_ml50_mb3}>
          <b>text2gif-web-app</b>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
