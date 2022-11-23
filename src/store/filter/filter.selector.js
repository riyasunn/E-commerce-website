import { createSelector } from "reselect";
 
 const selectFilterReducer = (state) => state.filter;

 export const selectFilterArray = createSelector(
    [selectFilterReducer],
    (filter) => filter.filterProducts
 );

export const selectIsFilterOpen = createSelector(
   [selectFilterReducer],
   (filter) => filter.isFilterOpen
);