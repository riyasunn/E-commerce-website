import { useState } from "react";

import './sign-up-form.styles.scss';

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import { useDispatch } from "react-redux";
import { signUp } from '../../store/user/user.action';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
// change key/value
// defaultFormFields['displayName'] = value;
// defaultFormFields.displayName = value;

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields (defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert("passwords do not match");
      return;
    };
    dispatch(signUp(email, password, displayName));
    console.log("email+password", email, password, displayName);
    resetFormFields();
  };

  const handleChange = (event) => {
    const { type, name, value } = event.target;
    console.log(type, name, value)
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}> 
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={ handleChange }
          name='displayName'
          value={ displayName }
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={ handleChange }
          name='email'
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={ handleChange }
          name='password'
          value={ password }
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={ handleChange }
          name='confirmPassword'
          value={ confirmPassword }
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
