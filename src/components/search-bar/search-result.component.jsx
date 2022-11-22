import { FilterContainer } from "./search-result.style";
import ProductCard from "../product-card/product-card.component";

const SearchResult = ({filteredProducts}) => {
    
    
 
    return (
        <FilterContainer>
            {filteredProducts.map((product) => 
            <ProductCard key={product.id} product={product}/>)
            }
        
        </FilterContainer>
    )
};

export default SearchResult;