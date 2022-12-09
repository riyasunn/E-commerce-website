import { FilterContainer } from "./search-result.style";
import ProductCard from "../product-card/product-card.component";
import { useSelector, useDispatch } from "react-redux";
import { selectFilterArray } from "../../store/filter/filter.selector";
import { setIsFilterOpen } from "../../store/filter/filter.action";

const SearchResult = () => {
    
    const filteredProducts = useSelector(selectFilterArray);
    console.log("search result page", filteredProducts);
    console.log("length", filteredProducts.length);
    //set isFilterOpen to false:
    const dispatch = useDispatch();
    dispatch(setIsFilterOpen(false));
    return (
        <FilterContainer>
        
            {filteredProducts.length ? (
                filteredProducts.map((product) => 
                <ProductCard key={product.id} product={product}/>)
            ) : (
                <h1>No search result</h1>
            )}
            
        </FilterContainer>
    )
};

export default SearchResult;