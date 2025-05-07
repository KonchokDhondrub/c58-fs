import "./ProfileCard.css";

function ProfileCard({ props: { avatar, fname, lname, occupation, hobby } }) {
  return (
    <>
      {fname && lname ? (
        <>
          <img src={avatar} alt={fname + " " + lname} />
          <p>Full name:<span>{fname} {lname}</span></p>
          <p>Occupation: <span>{occupation}</span></p>
          <p>Hobby: <span>{hobby}</span></p>
        </>
      ) : (
        <p>Not valid profile 😵</p>
      )}
    </>
  );
}

export default ProfileCard;
