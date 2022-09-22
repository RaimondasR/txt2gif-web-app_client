import React, { useRef, useState } from 'react';
import http from '../../plugins/http';
import { useNavigate } from "react-router-dom";
import styles from './TextSubmitComp.module.css';

const TextSubmitComp = () => {
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
    <div className={styles.text_submit_comp}> {/* old className="EnterTextComp" */}
  
      <div className={`${styles.text_submit_div} ${styles.d_flex} ${styles.column} ${styles.a_center}`}> {/* old className="enter-text-div" */}

        <div className={`${styles.txt_div} ${styles.d_flex} ${styles.a_center} ${styles.fs20}`}><b>IBM Watson Natural Language Service</b></div> {/* old className="sign-div" */}
        <div className={`${styles.txt_div} ${styles.d_flex} ${styles.a_center} ${styles.fs20}`}><b>Text Submit Form</b></div> {/* old className="sign-div" */}
                    
        <div className={`${styles.txt_div} ${styles.d_flex} ${styles.a_flex_end} ${styles.mt10} ${styles.mb0} ${styles.fs14}`}> {/* old className="sign-div" */}
          <div className={`${styles.c_gray} ${styles.mr5}`}><b>Your Text</b></div>
          <div className={`${styles.c_red} ${styles.fs11} ${styles.mb2}`}><b>REQUIRED</b></div>              
        </div>

        <textarea className={styles.txt_inp} ref={refs.textRef} placeholder="Type or copy-paste your text here..."> {/* old className="msg-inp" */}        
        </textarea>
                  
        <div className={`${styles.txt_div} ${styles.d_flex} ${styles.center} ${styles.mt30}`}> {/* old className="sign-div" */}
          <button onClick={textSubmit}>Submit Text</button>
        </div>

        {message && <div className={`${styles.txt_inp} ${styles.d_flex} ${styles.center} ${styles.mt15}`}>{message.message}</div>}  
      </div>
    </div>
  );
};

export default TextSubmitComp;