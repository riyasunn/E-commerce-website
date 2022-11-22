import { Products } from "./filter-product-card.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import Button from "../button/button.component";


const FilterProductCard = ({product}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        
        <Products>
                                
            <img src={product.imageUrl} alt={product.name} />
            <div className="details">
                <span>{product.name}</span>
                <span>{` $${product.price}`}</span>
                <Button onClick={addProductToCart} > add to cart</Button>
            </div>
        </Products>
        
    )
};

export default FilterProductCard;