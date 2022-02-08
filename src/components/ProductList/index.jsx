import Product from "../Product"
import './styles.css'

const ProductList = ({products, handleClick, filteredProducts, search}) => {
  
    return filteredProducts.length > 0 ? (

        <>
            {search !== '' && 
            (<h1 className='resultFilter'>Resultados para: <strong>{search}</strong></h1>)}
            <ul className="vitrine-produtos">
                {filteredProducts.map(({id, name, category, price, img}) => 
                    <Product key={id} 
                    id={id} 
                    name={name} 
                    category={category} 
                    price={price} 
                    img={img} 
                    handleClick={handleClick}/>
                )}
            </ul>
        </>
    ) : (
        <>
        <ul className="vitrine-produtos">
            {products.map(({id, name, category, price, img}) => 
                <Product key={id} 
                id={id} 
                name={name} 
                category={category} 
                price={price} 
                img={img} 
                handleClick={handleClick}/>
            )}
        </ul>
        </>
    )
}

export default ProductList