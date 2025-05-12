// import React, { Suspense } from "react";
import "./App.css";

// const type = "ls"; // "hw" или "ls"
// const number = 4;

// function getSelectedPath(type, num) {
//   const numCorr = num > 0 && num < 10 ? `0${num}` : `${num}`;
//   const typeCorr = type === "ls" ? "Lesson" : type === "hw" ? "Homework" : null;
//   const pathCorr = type === "ls" ? `lessons/lesson_${numCorr}` : type === "hw" ? `hw/hw_${numCorr}` : null;

//   return `./${pathCorr}/${typeCorr}${numCorr}.jsx`;
// }

// const Def = React.lazy(() => import(`${getSelectedPath(type, number)}`));

import Def from "./hw/hw_05/Homework05.jsx";
// import Def from "./lessons/lesson_04/Lesson04.jsx";

function App() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Def />
      {/* </Suspense> */}
    </>
  );
}

export default App;
