import ProfileCard from "./components/ProfileCard.jsx";
import personList from "./components/profiles.json";
import "./Homework02.css";

function Homework02() {
  return (
    <>
      <h1>My Best Friends!</h1>
      <div className="container">
        {personList.map((person, index) => (
          <div className="box">
            <ProfileCard props={person} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Homework02;
