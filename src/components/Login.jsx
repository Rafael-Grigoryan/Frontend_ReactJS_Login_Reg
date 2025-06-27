import { Input } from "./Input";
import { Button } from "./Button";

export function Login() {
  const data = ["Enter your email", "Enter your password", "Login"];
  return (
    <div className="login-container">
      <h1>Login</h1>

      <Input title={data[0]} />
      <Input title={data[1]} />

      <p className="brand-color forget">Forrget password?</p>

      <Button title={data[2]} />

      <p>
        Don't have an account? <span className="brand-color">Signup</span>
      </p>
    </div>
  );
}
