import { Input } from "./Input";
import { Button } from "./Button";

export function Signup() {
  return (
    <div className="signup-container">
      <h1>Signup</h1>

      <Input title = "Enter your email" />
      <Input title =  "Choose a password"/>
      <Input title = "Confirm your password" />

      <div>
        <Button title = "Signup" />
      </div>

      <p>
        Alredy have an account? <span className="brand-color">Login</span>
      </p>
    </div>
  );
}
