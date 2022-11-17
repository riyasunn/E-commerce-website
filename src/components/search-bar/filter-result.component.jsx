import { FilterContainer } from "./filter-result.style";
import ProductCard from "../product-card/product-card.component";

const FilterResult = ({filteredProducts}) => {
    
    
 
    return (
        <FilterContainer>
            {filteredProducts.map((product) => 
            <ProductCard key={product.id} product={product}/>)
            }
        
        </FilterContainer>
    )
};

export default FilterResult;