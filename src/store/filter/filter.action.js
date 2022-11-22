import { createAction } from "../../utils/reducer/reducer.utils";
import { FILTER_ACTION_TYPE } from "./filter.types";


export const filterProducts = (searchFieldString, allProducts) => {
        const newFilteredProducts = allProducts.filter((product) => {
            return product.name.toLocaleLowerCase().includes(searchFieldString);
        });
        return createAction(FILTER_ACTION_TYPE.SET_FILTER, newFilteredProducts)
};

console.log("filter action fires");