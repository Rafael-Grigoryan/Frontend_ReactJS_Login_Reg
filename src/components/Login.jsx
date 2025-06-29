import { Input } from "./Input";
import { Button } from "./Button";

export function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>

      <Input title = "Enter your email" />
      <Input title = "Enter your password" />

      <p className="brand-color forget">Forrget password?</p>

      <Button title = "Login" />

      <p>
        Don't have an account? <span className="brand-color">Signup</span>
      </p>
    </div>
  );
}
