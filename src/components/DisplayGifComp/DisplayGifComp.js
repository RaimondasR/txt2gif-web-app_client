import React, { useRef, useState } from 'react';
import http from '../../plugins/http';
import { useNavigate } from "react-router-dom";
import styles from './DisplayGifComp.module.css';

const DisplayGifComp = () => {
  const nav = useNavigate();
  const [message, setMessage] = useState(null);    

  return (
    <div className={styles.gif_display_comp}>
  
      <div className={styles.text_submit_div}>

        <div className={styles.txt_div1}><b>Display GIF Images  component</b></div>
        <div className={styles.txt_div1}><b>Text Submit Form</b></div>
                    
        <div className={styles.txt_div2}>
          <div className={styles.txt_div3}><b>Your Text</b></div>
          <div className={styles.txt_div4}><b>REQUIRED</b></div>              
        </div>

        <textarea>      
        </textarea>

        {message && <div className={styles.msg_div}>{message.message}</div>}  
      </div>
    </div>
  );
};

export default DisplayGifComp;