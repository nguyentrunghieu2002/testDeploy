import { Label, Input, Checkbox } from "@rebass/forms";

import "./LoginPage.css";
import { Button } from "rebass";

const LoginPage = () => {
  return (
    <>
      <div className="Form" style={{ position: "relative" }}>
        <div style={{ width: "368px" }}>
          <div>
            <Label htmlFor="username" className="label-login">
              Username
            </Label>
            <div>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                className="input"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="label-login">
              Email
            </Label>
            <div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="fullname" className="label-login">
              Full name
            </Label>
            <div>
              <Input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Enter your full name"
                className="input"
              />
            </div>
          </div>

          <div style={{ display: "flex" }} className="Policy">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox size="18px" id="remember" name="remember" />
            </div>
            <span style={{ marginTop: "4px", lineHeight: "1.4" }}>
              {" "}
              I agree to the <a href="">Terms and Conditions</a> and{" "}
              <a href="">Privacy Policy</a>.
            </span>
          </div>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button className="Signup-button" bg="magenta">
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
