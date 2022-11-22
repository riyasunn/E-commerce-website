import { FilterContainer } from "./search-result.style";
import ProductCard from "../product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectFilterArray } from "../../store/filter/filter.selector";

const SearchResult = () => {
    const filteredProducts = useSelector(selectFilterArray);
    console.log("search result page", filteredProducts);
    console.log("length", filteredProducts.length);
    
 
    return (
        <FilterContainer>
            {filteredProducts.map((product) => 
            <ProductCard key={product.id} product={product}/>)
            }
        
        </FilterContainer>
    )
};

export default SearchResult;