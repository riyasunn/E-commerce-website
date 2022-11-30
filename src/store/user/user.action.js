import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

// export const setCurrentUser = (user) =>
//   createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// export const checkUserSession = () =>
//   createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

// export const googleSignInStart = () =>
//   createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

// export const emailSignInStart = (email, password) =>
//   createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

// export const signInSuccess = (user) =>
//   createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

// export const signInFailed = (error) =>
//   createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

// export const signUpStart = (email, password, displayName) =>
//   createAction(USER_ACTION_TYPES.SIGN_UP_START, {
//     email,
//     password,
//     displayName,
//   });

// export const signUpSuccess = (user, additionalDetails) =>
//   createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

// export const signUpFailed = (error) =>
//   createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

// export const signOutStart = () => 
//   createAction(USER_ACTION_TYPES.SIGN_OUT_START);

// export const signOutSuccess = () =>
//   createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

// export const signOutFailed = (error) =>
//   createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);

export const signInSuccessWithGoogle = (user) => {
  console.log("signInSuccessWithGoogle fire", user);
  return createAction (USER_ACTION_TYPES.SIGN_IN_SUCCESS_GOOGLE, user);
}

export const signInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signInWithGoogle = () => async(dispatch) => {
  console.log("signInWithGoogle - 1");
  try {
    console.log("signInWithGoogle -2");
    const {user} = await signInWithGooglePopup();
    console.log("google userAuth.user", user);
    
    const userSnapshot = await createUserDocumentFromAuth(user);
    console.log("userSnapshot in action", userSnapshot.id);

    dispatch(signInSuccessWithGoogle({ id: userSnapshot.id, ...userSnapshot.data() }));
    console.log("dispatch signin ");
  } catch (error) {
    dispatch(signInFailed(error));
  }
}