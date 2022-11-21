import { SearchDropdownContainer, NoResultMessage, Products } from "./sear-dropdown.style";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import Button from "../button/button.component";



const SearchDropdown = ({filteredProducts}) => {
   
    
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = (product) => dispatch(addItemToCart(cartItems, product));


    return(
        <SearchDropdownContainer>
            { filteredProducts.length ?  
                
                (filteredProducts
                    .filter((_, idx) => idx < 4)
                    .map((product) => {
                        
                        return(
                            <Products>
                                
                                <img src={product.imageUrl} alt={product.name} />
                                <div className="details">
                                    <span>{product.name}</span>
                                    <span>{` $${product.price}`}</span>
                                    <Button onClick={addProductToCart} product={product}> add to cart</Button>
                                </div>
                                
                               
                            </Products>
                        )
                    })
                ) : (
                    <NoResultMessage> No search result</NoResultMessage>
                )
            }
         
         <p >View all results</p>
         
        </SearchDropdownContainer>
    )
};

export default SearchDropdown;


