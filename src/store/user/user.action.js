import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { signInWithGooglePopup, createUserDocumentFromAuth, createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

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

// {
  // SIGN_UP_START: 'user/SIGN_UP_START',
  // SIGN_UP_SUCCESS: 'user/SIGN_UP_SUCCESS',
  // SIGN_UP_FAILED: 'user/SIGN_UP_FAILED',
// }


// SIGN IN WITH GOOGLE:
export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
export const signInWithGoogle = (user) => {
  console.log("signInSuccessWithGoogle fire", user);
  return createAction (USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
}
export const signInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const GoogleSignIn = () => async(dispatch) => {
  dispatch(googleSignInStart());
  try {
    // console.log("signInWithGoogle");
    const {user} = await signInWithGooglePopup();
    // console.log("google userAuth.user", user);
    const userSnapshot = await createUserDocumentFromAuth(user);
    // console.log("userSnapshot in action", userSnapshot.id);
    dispatch(signInWithGoogle({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    dispatch(signInFailed(error));
  }
};

//SIGN UP :
export const signUpStart = () => createAction(USER_ACTION_TYPES.SIGN_UP_START);
export const signUpSuccess = (user, additionalDetails) => {
  
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails});

  await getSnapshotFromUserAuth, user, additionalDetails);
};
export const signUpFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
export const signInAfterSignUP = (user,additionalDetails) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS,{user, additionalDetails})
};

export const signUp = (email, password, displayName) => async(dispatch) => {
  console.log("sign up action fired", email, password, displayName);
  dispatch(signUpStart());

  try{
    const {user} = await createAuthUserWithEmailAndPassword(email, password);
    console.log("createAuthUser--> user", user);
    dispatch(signUpSuccess(user, displayName));
  } catch (error) {
    dispatch(signUpFailed(error));
    console.log("action catch signup error", error);
    dispatch(signInFailed(error));
    console.log("action catch signin error", error);
  }
  
  try{
    const userSnapshot = await createUserDocumentFromAuth(user, displayName);
    console.log("userSnapshot", userSnapshot.data());
    dispatch(signInAfterSignUP(userSnapshot));
  } catch (error) {
    dispatch(signInFailed(error));
    console.log("action catch signin error", error);
  };


}

//SIGN IN WITH EMAIL AND PASSWORD:
export const signInSuccessWithEmail = (user) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_WITH_EMAIL, user);
};

export const signInWithEmail = () => async(dispatch, email, password) => {
  console.log("sign in with email action fired");
  try {
    const response = await signInAuthUserWithEmailAndPassword(email, password);
    console.log("Sign-in-email response", response);
    dispatch(signInSuccessWithEmail())
  } catch (error) {
    dispatch(signInFailed(error));
  }
};
