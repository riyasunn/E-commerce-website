import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/categories/category.selector';
import { useEffect, useState } from "react";
import FilterResult from './filter-result.component';
import SearchDropdown from './search-dropdown.component';
// import Button from '../button/button.component';

const SearchBar = () => {

     // set up search field:
     const [searchField, setSearchField] = useState('');
     const onSearchChange = (event) => {
         const searchFieldString = event.target.value.toLocaleLowerCase();   
         console.log(searchFieldString);
         setSearchField(searchFieldString);
     };

    //get products data:
    const allProducts = useSelector(selectAllProducts);
    // console.log("searchbar", categoriesMap);

    // transfer products data type:
    // var allProducts= [];
    // Object.keys(categoriesMap).map((title) => {
    //    const products = categoriesMap[title];
    //    console.log(title, products);
    //    allProducts.push(...products);
        
//        console.log("current products", allProducts);
//    });
       console.log("all products", allProducts)
    
   
    //filter products:
    // const [ filteredProducts, setFilteredProducts ] = useState(allProducts);

    // useEffect(() => {
    //     const newFilteredProducts = allProducts.filter((product) => {
    //         return product.name.toLocaleLowerCase().includes(searchField);
    //     });
    //     setFilteredProducts(newFilteredProducts);
    // }, [searchField, allProducts]);
  


    return (
        <>
            <input 
            type='search'
            placeholder="search products"
            onChange={onSearchChange}
            />
        { /* <FilterResult filteredProducts={filteredProducts}/>*/}
         { /* {searchField.length && <SearchDropdown filteredProducts={filteredProducts}/>} */}
          
        </>
    )
};

export default SearchBar;
