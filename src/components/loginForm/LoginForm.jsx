import { useState } from "react";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import "./LoginForm.css";

// const submitLog = () => console.log("Submited!");

function LoginForm({}) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Login:", login);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-form-container">
      <h2>LogIn</h2>
      <MyInput name="login" type="type" label="Login: " placeholder="can write your login here" onChange={(e) => setLogin(e.target.value)} />

      <MyInput name="email" type="email" label="Email: " placeholder="e-mail must be with @" onChange={(e) => setEmail(e.target.value)} />
      <MyInput name="password" type="password" label="Password: " placeholder="password must be `qwerty`" onChange={(e) => setPassword(e.target.value)} />
      <MyButton func={handleSubmit} type="submit" text="LogIn" />
    </div>
  );
}

export default LoginForm;
