import { useEffect, useState } from "react";
import Hero_cards from "./components/Hero_cards";
import { fellowship } from "./fellowship";
import "./lesson05.css";
import MyButton from "../../components/myButton/MyButton";

function Lesson05() {
  // console.log(fellowship);

  const [heroes, setHeroes] = useState(fellowship);
  console.log(heroes);

  useEffect(() => {
    document.title = "React map() 🧝🏻‍♂️ – Homework 5";
  }, []);

  const handleDelete = (id) => {
    setHeroes((prev) => prev.filter((h) => h.id !== id)); /*  Обновляем список, исключая элемент с указанным id */
  };

  return (
    <div>
      <h1>Lesson 05: React map() 🧝🏻‍♂️</h1>
      <div className="hero-container">
        {heroes.map((hero) => (
          <div key={hero.id} className="key">
            <Hero_cards props={hero} />
            <MyButton func={() => handleDelete(hero.id)} text="delete" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lesson05;
