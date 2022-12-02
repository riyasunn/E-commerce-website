import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    // isLoading: false,
    error: null,
};

export const userReducer = (state = INITIAL_STATE , action) => {
    // console.log('dispatch');
    // console.log(action);
    const { type, payload } = action;
    console.log("user reducer recv", type, payload);
    switch(type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            console.log("user reducer fire SIGN_IN_WITH_GOOGLE");
            return {
                ...state,
                currentUser: payload,
            };
            
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
            };
            
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            console.log("user reducer fire SIGN_IN_FAILED");
        // case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return {
                ...state,
                error: payload,
            };
            
        default:
            return state;
    }
};
