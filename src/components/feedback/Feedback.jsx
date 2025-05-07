import { useState } from "react";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import "./Feedback.css";

function Feedback() {
  let [comment, setComment] = useState(0);

  let [countLike, setCountLike] = useState(0);
  let [countDislike, setCountDislike] = useState(0);

  function resetAll() {
    setCountLike((p) => 0);
    setCountDislike((p) => 0);
  }

  return (
    <>
      <h2>Feedback</h2>
      <div className="feedback-form-container">
        <div className="button-box">
          <div className="button-count-box">
            <MyButton func={() => setCountLike((p) => p + 1)} text="👍" className="button" />
            <span>{countLike}</span>
          </div>
          <div className="button-count-box">
            <MyButton onClick={() => setCountDislike((p) => p + 1)} text="👎" className="button" />
            <span>{countDislike}</span>
          </div>
          <MyButton func={resetAll} text="❌" className="button button-red" />
        </div>
      </div>
    </>
  );
}

export default Feedback;
