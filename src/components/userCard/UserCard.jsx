import "./UserCard.css";

function UserCard({ name = "name not defined", age = 404, hobby = "hobby not defined" }) {
  //   console.log(props);

  return (
    <div className="user-card">
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      {hobby ? <p>Hobby: {hobby}</p> : <p>no hobby :(</p>}
    </div>
  );
}

export default UserCard;
