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
  googleSignInStart,
  emailSignInStart,
  signInWithGoogle,
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
    dispatch(signInWithGoogle());
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  // if(password !== confirmPassword) {
  //   alert("passwords do not match");      no need to compaire password & comfirmed password
  //   return;
  // }

  // try{
  //   dispatch(emailSignInStart(email, password));
  //   // await signInAuthUserWithEmailAndPassword (email, password);

  // //  console.log(response);

  // // setCurrentUser(user); //run setCurrentUser when the await user come back; deleted becuz setuser in usercontext file
  //   resetFormFields();

  // }catch(error) {
  //   console.log('user sign in failed', error);
  //  switch (error.code) {
  //   case 'auth/wrong-password':
  //     alert('incorrect password for email');
  //     break;
  //   case 'auth/user-not-found':
  //     alert('no user associated with this email');
  //     break;
  //   default:
  //     console.log(error);
  //  }
  // if (error.code === "auth/wrong-password") {
  //   alert("incorrect password for email");
  // }else if(error.code === "auth/user-not-found") {
  //   alert("no user associated with this email")
  // }

  // };

  const handleChange = (event) => {
    const { type, name, value } = event.target;
    console.log(type, name, value);
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form>
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
