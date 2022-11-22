import { SearchContainer } from './search-bar.styled';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/categories/category.selector';
import { useState, useRef } from "react";
import SearchDropdown from './search-dropdown.component';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../store/filter/filter.action';

const SearchBar = () => {

     // set up search field:
     const [searchField, setSearchField] = useState('');
    
     const onSearchChange = (event) => {
         const searchFieldString = event.target.value.toLocaleLowerCase();   
         console.log(searchFieldString);
         setSearchField(searchFieldString);
     };

     //clear searchFieldString:
     const ref = useRef(null);
     const clearSearchFieldHandler = () => {
        setSearchField('');
        ref.current.value = '';
     }

    //get allProducts data:
    const allProducts = useSelector(selectAllProducts);
   
       console.log("all products", allProducts)

    //dispatch filter action:
     const dispatch = useDispatch();

     const search = () => dispatch(filterProducts(searchField, allProducts))
     console.log("search", search());

    return (
        <SearchContainer>
            <input 
            type='search'
            placeholder="search products"
            onChange={(e) => {onSearchChange(e); search()}}
            ref={ref}
            />
            <div className='clear-button' onClick={clearSearchFieldHandler}>&#10005;</div>
            {searchField.length !==0 && <SearchDropdown />} 
          
        </SearchContainer>
    )
};

export default SearchBar;
