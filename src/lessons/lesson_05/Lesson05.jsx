import { fellowship } from "./fellowship";
// import { v4 } from uuid;
import "./lesson05.css";

function Lesson05() {
  // console.log(fellowship);
  // console.log(v4());

  return (
    <div>
      <h1>Lesson 05: React map() 🧝🏻‍♂️</h1>
      <div className="hero-container">
        {fellowship.map((hero) => (
          <div key={hero.id} className={`hero-box hero-box-${hero.isDark ? "dark" : "light"}`}>
            <div className="hero-box-text">
              <p>
                {hero.name}, {hero.age}, {hero.isDark ? "👺" : "👼"}
              </p>
              <p>
                {hero.weapons.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </p>
            </div>
            <div className="hero-img">
              <img src={hero.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lesson05;
