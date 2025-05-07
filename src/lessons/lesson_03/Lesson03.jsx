import MyButton from "../../components/myButton/MyButton.jsx";
import UserCard from "../../components/userCard/UserCard.jsx";

function Lesson03() {
  const friends = [
    { name: "Peter", age: 40, hobby: "coding" },
    { name: "Rosa", age: 35, hobby: "hiking" },
    { name: "Anton", age: 20, hobby: "painting" },
  ];

  const go = () => console.log("go-go!");

  return (
    <div>
      <h1>Lesson 3: React props 👨‍👩‍👧‍👦</h1>

      <MyButton func={() => console.log("push!")} text="нажми меня" />
      <MyButton func={go} text="go" />
      <MyButton />

      <UserCard name={friends[0].name} age={friends[0].age} hobby={friends[0].hobby} />
      <UserCard name="Rosa" age={35} />
      <UserCard name="Anton" age={20} hobby="painting" />
    </div>
  );
}

export default Lesson03;
