import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector, useDispatch} from "react-redux";
import { selectCurrentUser, selectUserName, selectIsSignOutOpen } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import SignOutIcon from "../../components/sign-out/sign-out.component";
import { SetIsSignOutOpen } from "../../store/user/user.action";
import { NavLinks, NavLink } from "./right-nav.styles";

const RightNav = ({open}) => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const userName = useSelector(selectUserName);
    const isSignOutOpen = useSelector(selectIsSignOutOpen);
    const dispatch = useDispatch();

    const toggleIsSignOutOpen = () => {
      dispatch(SetIsSignOutOpen(!isSignOutOpen));
      console.log("dispatch set is-sign-out-open fired")
  };

    return (
        <>
        <NavLinks open={open}>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (<NavLink as="span" onClick = {toggleIsSignOutOpen}>
            Hello, {userName}      
            </NavLink>) 
              :
            (<NavLink to="/auth">SIGN IN</NavLink>)
          }
          <CartIcon />
        </NavLinks>

            { isCartOpen && <CartDropdown/> }
            { isSignOutOpen && <SignOutIcon/>}
        </>
    )
};

export default RightNav;