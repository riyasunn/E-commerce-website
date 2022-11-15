import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useEffect, useState } from "react";
import ProductCard from '../product-card/product-card.component';

const SearchBar = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const [searchField, setSearchField] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    // onSearchChange handler:
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();   
        console.log(searchFieldString);
        setSearchField(searchFieldString);
    };
    //filter:
    
    
    useEffect(() => {
        const newFilteredProducts = categoriesMap.filter((category) => {
            return category.name.toLocaleLowerCase().includes(searchField);
        });

        setFilteredProducts(newFilteredProducts);
    }, [searchField])
  


    return (
        <div>
            <input 
            type='search'
            placeholder="search products"
            onChange={onSearchChange}
            
            />
         { /*  <ProductCard Product = {filteredProducts} /> */}
            
        </div>
    )
};

export default SearchBar;
