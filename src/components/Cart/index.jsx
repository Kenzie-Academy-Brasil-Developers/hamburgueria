import './styles.css'
import EmptyCart from './emptyCart.svg'
import CartProduct from '../CartProduct'
import CartTotal from '../CartTotal'

const Cart = ({currentSale, setCurrentSale}) => {

    const removeItem = (product) => {
        const remove = currentSale.filter((item) => item !== product)
    
        setCurrentSale(remove)
      }

    return (
        <>
        <ul className='cart-list'>
            {currentSale.length === 0 ? (
                <img src={EmptyCart} alt="Carrinho vazio" />
            ) : (
                <>
                    {currentSale.map((product, index) => 
                    <CartProduct removeItem={removeItem} product={product} key={index}/>                
                    )} 
                </>   
            )}    
        </ul>    
            {currentSale.length !== 0 && <CartTotal currentSale={currentSale} /> }
        </>
    )
}

export default Cart