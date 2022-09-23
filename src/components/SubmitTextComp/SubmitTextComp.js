import React, { useRef, useState } from 'react';
import http from '../../plugins/http';
import { useNavigate } from "react-router-dom";
import styles from './SubmitTextComp.module.css';

const SubmitTextComp = () => {
  const nav = useNavigate();
  const [message, setMessage] = useState(null);

  const refs = { 
    textRef: useRef()   
  }  

  async function textSubmit () {
    const textData = {    
      text: refs.textRef.current.value, // text submitted
    } 
    
    http.post(textData, "submit-text")
      .then((res) => {
        // setMessage({success: res.success, message: res.message}); 
        if (res.success) {
          console.log("res.message:",res.message);
          console.log("res.gif:",res.gif);
          setMessage(res.message);
        //   nav(`/text/${id}/${refs.textRef.current.value}`)
        }
      })
  };

  return (
    <div className={styles.text_submit_comp}>
  
      <div className={styles.text_submit_div}>

        <div className={styles.txt_div1}><b>IBM WATSON NATURAL LANGUAGE SERVICE</b></div>
        <div className={styles.txt_div1}><b>Text Submit Form</b></div>
                    
        <div className={styles.txt_div2}>
          <div className={styles.txt_div3}><b>Your Text</b></div>
          <div className={styles.txt_div4}><b>REQUIRED</b></div>              
        </div>

        <textarea ref={refs.textRef} placeholder="Type or copy-paste your text here..." >      
        </textarea>
                  
        <div className={styles.txt_div5}>
          <button onClick={textSubmit}>Submit Text</button>
        </div>

        {message && <div className={styles.msg_div}>{message.message}</div>}  
      </div>
    </div>
  );
};

export default SubmitTextComp;