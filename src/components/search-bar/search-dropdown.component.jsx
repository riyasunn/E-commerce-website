import { SearchDropdownContainer, NoResultMessage } from "./search-dropdown.style";

import FilterProductCard from "./filter-product-card.component";



const SearchDropdown = ({filteredProducts}) => {

    return(
        <SearchDropdownContainer>
            { filteredProducts.length ?  (
                <>
                {filteredProducts
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <FilterProductCard key={product.id} product={product}/>
                    ))
                }
                <p >View all results</p>
                </>
                ) : (
                    <NoResultMessage> No search result</NoResultMessage>
                )
            }
         
         
         
        </SearchDropdownContainer>
    )
};

export default SearchDropdown;


