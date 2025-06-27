import { Input } from "./Input";
import { Button } from "./Button";

export function Signup() {
  const data = [
    "Enter your email",
    "Choose a password",
    "Confirm your password",
    "Signup",
  ];
  return (
    <div className="signup-container">
      <h1>Signup</h1>

      <Input title={data[0]} />
      <Input title={data[1]} />
      <Input title={data[2]} />

      <div>
        <Button title={data[3]} />
      </div>

      <p>
        Alredy have an account? <span className="brand-color">Login</span>
      </p>
    </div>
  );
}
