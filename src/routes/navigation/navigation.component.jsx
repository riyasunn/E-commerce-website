import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, NavLinks, NavLink, LogoContainer, HeaderContainer } from './navigation.styles';
import { useSelector, useDispatch} from "react-redux";
import { selectCurrentUser, selectUserName, selectIsSignOutOpen } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectIsFilterOpen } from "../../store/filter/filter.selector";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import SearchBar from "../../components/search-bar/search-bar.component";
import SearchDropdown from "../../components/search-bar/search-dropdown.component";
import SignOutIcon from "../../components/sign-out/sign-out.component";
import { SetIsSignOutOpen } from "../../store/user/user.action";

const Navigation = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isFilterOpen = useSelector(selectIsFilterOpen);
  const userName = useSelector(selectUserName);

  useEffect(() => { dispatch(fetchCategoriesAsync())}, []);
  
  const isSignOutOpen = useSelector(selectIsSignOutOpen);

  const toggleIsSignOutOpen = () => {
      dispatch(SetIsSignOutOpen(!isSignOutOpen));
      console.log("dispatch set is-sign-out-open fired")
  };

  return (
    <Fragment>
      
      < NavigationContainer >
        <LogoContainer to="/">
          <CrwnLogo className="logo"/>
        </LogoContainer>
        <SearchBar />
        { isFilterOpen && <SearchDropdown/> }
        <NavLinks>
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
      </NavigationContainer>
      
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
 