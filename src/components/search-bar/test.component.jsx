import ProductCard from "../product-card/product-card.component";

const Test = ({filteredProducts}) => {
    
    
 
    return (
        <div>
            {filteredProducts.map((product) => 
            <ProductCard key={product.id} product={product}/>)
            }
        
        </div>
    )
};

export default Test;