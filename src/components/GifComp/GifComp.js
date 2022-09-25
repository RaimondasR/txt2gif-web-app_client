import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GifComp.module.css";

const GifComp = () => {
  const nav = useNavigate();
  const [message, setMessage] = useState(null);

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
          <div className={styles.two_div_wrap}>
            <div>txt1</div>         
            <div>gif1</div> 
          </div>
        </div> 

        <div className={styles.bottom_wrap}>
          <div className={styles.two_div_wrap}>
            <div>txt2</div> 
            <div>gif2</div> 
          </div>
          <div className={styles.two_div_wrap}>
            <div>txt3</div> 
            <div>gif3</div> 
          </div>
          <div className={styles.two_div_wrap}>
            <div>txt4</div> 
            <div>gif4</div> 
          </div>
          <div className={styles.two_div_wrap}>
            <div>txt5</div> 
            <div>gif5</div> 
          </div>                    
        </div>
        {/* {message && <div className={styles.msg_div}>{message.message}</div>} */}
      </div>
    </div>
  );
};

export default GifComp;
