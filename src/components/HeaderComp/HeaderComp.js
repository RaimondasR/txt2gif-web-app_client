import React from 'react';
import styles from './HeaderComp.module.css';

const HeaderComp = () => {
  return (
    <div className={`${styles.HeaderComp} ${styles.d_flex} ${styles.a_center}`}>
      <div className={`${styles.d_flex} ${styles.row} ${styles.a_flex_end}`}> 
        <div className={styles.fs26}><b>Text to GIF Web Application</b></div> 
        <div className={`${styles.fs18} ${styles.ml50} ${styles.mb3}`}><b>text2gif-web-app</b></div>   
      </div>  
    </div>
  )
}

export default HeaderComp;