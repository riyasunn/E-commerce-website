import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    userName: '',
    isSignOutOpen: false,
};

export const userReducer = (state = INITIAL_STATE , action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            // console.log("user reducer fire SIGN_IN_WITH_GOOGLE");
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
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return {
                ...state,
                error: payload,
            };
            
        case USER_ACTION_TYPES.GET_USER_NAME:
            return {
                ...state,
                userName: payload,
            };

        case USER_ACTION_TYPES.IS_SIGN_OUT_OPEN:
            return {
                ...state,
                isSignOutOpen: payload,
            };

        default:
            return state;
    };
};
