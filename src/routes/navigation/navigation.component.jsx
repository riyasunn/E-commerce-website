import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { NavigationContainer, LogoContainer, SearchBarContainer } from './navigation.styles';
import { useSelector, useDispatch} from "react-redux";


import { selectIsFilterOpen } from "../../store/filter/filter.selector";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import SearchBar from "../../components/search-bar/search-bar.component";
import SearchDropdown from "../../components/search-bar/search-dropdown.component";
// import RightNav from "./right-nav";
import Burger from "./burger";


const Navigation = () => {

  const dispatch = useDispatch();
 
  const isFilterOpen = useSelector(selectIsFilterOpen);
  

  useEffect(() => { dispatch(fetchCategoriesAsync())}, []);
  
  

  return (
    <Fragment>
      
      < NavigationContainer >
        <LogoContainer to="/">
          <CrwnLogo className="logo"/>
        </LogoContainer>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        { isFilterOpen && <SearchDropdown/> }
        <Burger/>
      </NavigationContainer>
      
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
 