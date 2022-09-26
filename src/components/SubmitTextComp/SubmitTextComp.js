import React, { useRef, useState } from "react";
import { useEffect } from "react";
import http from "../../plugins/http";
import { useNavigate } from "react-router-dom";
import styles from "./SubmitTextComp.module.css";

const SubmitTextComp = () => {
  useEffect(() => {
    if (!localStorage.hasOwnProperty("gifs")) {
      localStorage.setItem("gifs", JSON.stringify([]));
    }
  }, []);

  const nav = useNavigate();
  const [generating, setGenerating] = useState(false);
  const [message, setMessage] = useState(null);

  const refs = {
    textRef: useRef(),
  };

  async function submitText() {
    setGenerating(true);
    const textData = {
      submittedText: refs.textRef.current.value, 
    };

    http.post(textData, "produce-gif").then((res) => {
      if (res.success) {
        setGenerating(false);
        const gifs = JSON.parse(localStorage.getItem("gifs"));
        const textAndGif = {
          gifUrl: res.gifUrl,
          text: res.text,
        };
        gifs.unshift(textAndGif);
        if (gifs.length > 5) {
          for (let i = 0; i < gifs.length; i++) {
            if (gifs.length > 5) gifs.pop();
          }
        }
        localStorage.setItem("gifs", JSON.stringify(gifs));
        setMessage(res.message);
        nav(`/produce-gif`);
      }
    });
  }

  return (
    <div className={styles.comp}>
      <div className={styles.div_wrap}>
        <div className={styles.page_name_div}>
          <b>SUBMIT TEXT PAGE</b>
        </div>
        <div className={styles.div1}>
          <b>Submit Text Form</b>
        </div>

        <div className={styles.div2}>
          <div className={styles.div3}>
            <b>Your Text</b>
          </div>
          <div className={styles.div4}>
            <b>REQUIRED</b>
          </div>
        </div>

        <textarea
          ref={refs.textRef}
          placeholder="Type or copy-paste your text here..."
        ></textarea>

        {generating ? (
          <div className={styles.btn_div}>Generating GIF ...</div>
        ) : (
          <div className={styles.btn_div}>
            <button onClick={submitText}>Submit Text</button>
          </div>
        )}

        {message && <div className={styles.msg_div}>{message.message}</div>}

        <div className={styles.giphy_div} />
      </div>
    </div>
  );
};

export default SubmitTextComp;
