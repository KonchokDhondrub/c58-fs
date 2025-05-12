import { useEffect } from "react";
import Hero_cards from "./components/Hero_cards";
import { fellowship } from "./fellowship";
import "./lesson05.css";

function Lesson05() {
//   console.log(fellowship);

  useEffect(() => {
    document.title = "React map() 🧝🏻‍♂️ – Homework 05";
  }, []);

  return (
    <div>
      <h1>Lesson 05: React map() 🧝🏻‍♂️</h1>
      <div className="hero-container">
        {fellowship.map((hero) => (
          <Hero_cards key={hero.id} props={hero} />
        ))}
      </div>
    </div>
  );
}

export default Lesson05;
