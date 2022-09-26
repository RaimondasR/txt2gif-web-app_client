import React from "react";
import styles from "./GifComp.module.css";

const GifComp = () => {
  const gifs = JSON.parse(localStorage.getItem("gifs"));
  console.log(gifs);
  return (
    <div className={styles.comp}>
      <div className={styles.div_wrap}>
        <div className={styles.top_wrap}>
          <div className={styles.page_name_div}>
            <b>PRODUCED GIF IMAGES PAGE</b>
          </div>
          <div className={styles.div1}>
            <b>The submitted texts and the produced GIF images</b>
          </div>
          {gifs &&
            gifs.map((gifObj, i) => (
              <div key={i} className={styles.two_div_wrap}>
                <div className={styles.txt_div}>{gifObj.text}</div>
                <div className={styles.gif_div}>
                  <img src={gifObj.gifUrl} alt="" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GifComp;
