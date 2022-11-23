import { SearchContainer } from './search-bar.styled';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/categories/category.selector';
import { useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { filterProducts, setIsFilterOpen } from '../../store/filter/filter.action';

const SearchBar = () => {

     // set up search field:
     const [searchField, setSearchField] = useState('');
    
     const onSearchChange = (event) => {
         const searchFieldString = event.target.value.toLocaleLowerCase();   
         console.log(searchFieldString);
         setSearchField(searchFieldString);
     };

    //get allProducts data:
    const allProducts = useSelector(selectAllProducts);
    console.log("all products", allProducts)

    //dispatch filter action:
     const dispatch = useDispatch();
     const search = () => dispatch(filterProducts(searchField, allProducts));
     console.log("search", search());

     //dispatch isFilterOpen action:
        if (searchField.length !==0) {
            dispatch(setIsFilterOpen(true));
        } else {
            dispatch(setIsFilterOpen(false));
        };

    //clear searchFieldString:
     const ref = useRef(null);
     const clearSearchFieldHandler = () => {
        setSearchField('');
        ref.current.value = '';
     }

    return (
        <SearchContainer>
            <input 
            type='search'
            placeholder="search products"
            onChange={(e)=> {onSearchChange(e); search()}}
            ref={ref}
            />
            <div className='clear-button' onClick={clearSearchFieldHandler}>&#10005;</div>
        </SearchContainer>
    )
};

export default SearchBar;
