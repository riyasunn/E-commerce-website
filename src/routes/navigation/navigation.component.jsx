import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// import { UserContext } from "../../context/user.context";
// import { CartContext } from "../../context/cart.context";
// import {signOutUser} from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { useSelector, useDispatch} from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { signOutStart } from '../../store/user/user.action';
import SearchBar from "../../components/search-bar/search-bar.component";

const Navigation = () => {
  

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
  
  useEffect(() => { dispatch(fetchCategoriesStart())}, []);


  return (
    <Fragment>
      < NavigationContainer >
        <LogoContainer to="/">
          <CrwnLogo className="logo"/>
        </LogoContainer>
        <SearchBar />
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (<NavLink as="span" onClick={signOutUser}>
            SIGN OUT 
            </NavLink>) 
              :
            (<NavLink to="/auth">SIGN IN</NavLink>)
          }
          <CartIcon />
        </NavLinks>
        { isCartOpen && <CartDropdown/> }
        
      </NavigationContainer>
      
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
 