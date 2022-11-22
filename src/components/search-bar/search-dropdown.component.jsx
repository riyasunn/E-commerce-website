import { SearchDropdownContainer, NoResultMessage } from "./search-dropdown.style";
import { useNavigate } from "react-router-dom";
import FilterProductCard from "./filter-product-card.component";
import { useSelector } from "react-redux";
import { selectFilterArray } from "../../store/filter/filter.selector";



const SearchDropdown = () => {
    const filteredProducts = useSelector(selectFilterArray);
    console.log("filtered products", filteredProducts);
    console.log("length", filteredProducts.length);

    const navigate = useNavigate();
    const goToSearchResultHandler = () => {
        navigate('/search-result');
    }

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
                <p onClick={goToSearchResultHandler}>View all results</p>
                </>
                ) : (
                    <NoResultMessage> No search result</NoResultMessage>
                )           
            }
         
         
         
        </SearchDropdownContainer>
    )
};

export default SearchDropdown;


