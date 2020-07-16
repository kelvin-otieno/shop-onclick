import React from "react";
import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";
import "./sign-in-and-sign-up-page.scss";

export default function SignInAndSignUpPage() {
  return (
    <div className="row sign-in-and-sign-up">
      <div className="col s12 m12 l5">
        <SignIn />
      </div>
      <div className = "col l1"></div>
      <div className="col s12 m12 l5 ">
        <SignUp />
      </div>
    </div>
  );
}
