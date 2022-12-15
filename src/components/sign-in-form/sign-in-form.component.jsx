import { useState } from "react";

import "./sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useDispatch } from "react-redux";
import {
  GoogleSignIn,
  signInWithEmail,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "", 
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields; 

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGooglePopup = async() => {
    console.log("signInWithGooglePopup");
    dispatch(GoogleSignIn());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signInWithEmail(email, password));
    console.log("email+password", email, password);
    resetFormFields();
  };

  const handleChange = (event) => {
    const { type, name, value } = event.target;
    console.log(type, name, value);
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGooglePopup}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
