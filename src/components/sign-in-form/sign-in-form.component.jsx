import { useState } from "react";

import "./sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import {UserContext} from '../../context/user.context';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  GoogleSignIn,
  signInWithEmail,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "", //delete displayname & confirmed password
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields; //delete displayname & confirmed password

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGooglePopup = async() => {
    console.log("signInWithGooglePopup");
    dispatch(GoogleSignIn());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      dispatch(signInWithEmail(email, password));
      console.log("email+password", email, password);
      resetFormFields();
    } catch(error) {
      console.log('sign in with email failed', error);
      alert("Sign in encountered an error", error);
      };
  };

  const handleChange = (event) => {
    const { type, name, value } = event.target;
    console.log(type, name, value);
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
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
