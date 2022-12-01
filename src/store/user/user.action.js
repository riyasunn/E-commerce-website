import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { signInWithGooglePopup, createUserDocumentFromAuth, createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

// SIGN IN WITH GOOGLE:
  //create actions for google-sign-in:
export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
export const googleSignInSuccess = (user) => {
  console.log("signInSuccessWithGoogle fire", user);
  return createAction (USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
};
//create action for sign-in failed:
export const signInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const GoogleSignIn = () => async(dispatch) => {
  dispatch(googleSignInStart());
  try {
    // console.log("signInWithGoogle");
    const {user} = await signInWithGooglePopup();
    // console.log("google userAuth.user", user);
    const userSnapshot = await createUserDocumentFromAuth(user);
    // console.log("userSnapshot in action", userSnapshot.id);
    dispatch(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    dispatch(signInFailed(error));
  };

};

//SIGN UP:
  //create actions for sign-up:
export const signUpStart = () => createAction(USER_ACTION_TYPES.SIGN_UP_START);
export const signUpSuccess = (user, additionalDetails) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails});
};
export const signUpFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
//create actions for sign-in-success:
export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

//sign in after sign up success:
export const signInAfterSignUp =  (userAuth, additionalDetails={}) => async(dispatch) => {
  console.log("get userAuth from signup success", userAuth, additionalDetails, dispatch);

  try {
    const userSnapshot = await createUserDocumentFromAuth(
      userAuth,
      additionalDetails={}
    );
    console.log("get userSnapshot from firebase", userSnapshot);
    dispatch(signInSuccess(userSnapshot));
  } catch (error) {
    console.log("sign in failed ", error);
    dispatch(signInFailed(error));
  };

};

export const onSignUPSuccess = (user) => async(dispatch) => {
  console.log("onSignUPSuccess", user, dispatch);
  dispatch(signUpSuccess(user));

  try {
  dispatch(signInAfterSignUp(user));
  } catch (error) {
  console.log("sign In After SignUp failed", error);
  };

};

export const signUp = (email, password, displayName) => async(dispatch) => {
  // console.log("sign up action fired", email, password, displayName);
  dispatch(signUpStart());

  try {
    const {user} = await createAuthUserWithEmailAndPassword(email, password);
    // console.log("createAuthUser--> user", user);
    dispatch(onSignUPSuccess({ ...user, displayName: displayName }));
    // console.log("user---> info",{ ...user, displayName: displayName });
  } catch (error) {
    dispatch(signUpFailed(error));
    console.log("sign up failed", error);
  };
};

//SIGN IN WITH EMAIL AND PASSWORD:
  //create action for email-sign-in-start:
export const emailSignInStart = () => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START);
export const signInSuccessWithEmail = (user) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
};

export const signInWithEmail = (email, password) => async(dispatch) => {
  console.log("sign in with email action fired");
  dispatch(emailSignInStart());
  
  try {
    const userAuth = await signInAuthUserWithEmailAndPassword(email, password);
    console.log("Sign-in-email userAuth", userAuth);
    dispatch(signInSuccessWithEmail(userAuth));
  } catch (error) {
    dispatch(signInFailed(error));
  };

};
