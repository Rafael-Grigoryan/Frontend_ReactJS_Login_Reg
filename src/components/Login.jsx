import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [data, setData] = useState({});

  // const click = () => {
  //   const newData = {
  //     email: email,
  //     password: password,
  //   };
  //   setData(newData);
  //   console.log(data);
  // };

  const click = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className="login-container">
      <h1>Login</h1>

      <Input
        title="Enter your email"
        value={email}
        onChange={(evt) => {
          setEmail(evt.target.value);
        }}
      />

      <Input
        title="Enter your password"
        value={password}
        onChange={(evt) => {
          setPassword(evt.target.value);
        }}
      />

      <p className="brand-color forget">Forrget password?</p>

      <Button title="Login" onClickLogin={click} />

      <p>
        Don't have an account? <span className="brand-color">Signup</span>
      </p>

    </div>
  );
}
