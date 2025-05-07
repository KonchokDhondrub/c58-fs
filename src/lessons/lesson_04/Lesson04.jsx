import { useState } from "react";
import MyButton from "../../components/myButton/MyButton.jsx";

function Lesson04() {
  let [count, setCount] = useState(0);
  //   let result = useState(0);
  //   const count = result[0];
  //   const setCount = result[1];

  console.log(count);

  function handleChange(i) {
    setCount((p) => p + i);
  }

  return (
    <div>
      <h1>Lesson 4: useState hook 🪝</h1>
      <MyButton text="-10" func={() => handleChange(-10)} />
      <MyButton text="-1" func={() => handleChange(-1)} />
      <span>
        <b> {count} </b>
      </span>
      <MyButton text="+1" onClick={() => handleChange(1)} />
      <MyButton text="+10" onClick={() => handleChange(10)} />
    </div>
  );
}


export default Lesson04;
