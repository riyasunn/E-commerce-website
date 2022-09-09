// import {ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';
// import { useContext } from 'react';
// import { CartContext } from '../../context/cart.context';
import {ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';



const CartIcon = () => {
    const dispatch = useDispatch();
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));



    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
         <ShoppingIcon/>
         <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};
export default CartIcon;
