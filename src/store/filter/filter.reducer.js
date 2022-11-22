import { FILTER_ACTION_TYPE } from "./filter.types";

export const FILTER_INITIAL_STATE = {
    filterProducts: [],
};

export const filterReducer = (state = FILTER_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    
    switch (type) {
        case FILTER_ACTION_TYPE.SET_FILTER:
            return {
                ...state,
                filterProducts: payload,
            };
        default:
            return state;
    }
};