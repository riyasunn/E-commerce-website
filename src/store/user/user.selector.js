import { createSelector } from "reselect";

 const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (user) => user.currentUser,
);

// console.log("user selector fired");

export const selectUserName = createSelector(
    [selectUserReducer],
    (user) => user.userName,
);


export const selectIsSignOutOpen = createSelector(
    [selectUserReducer],
    (user) => user.isSignOutOpen,
    
);
console.log("user selector fired");