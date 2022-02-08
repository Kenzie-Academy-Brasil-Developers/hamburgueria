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
        
            {currentSale.length === 0 ? (
                <ul className='empty'>
                    <li> 
                        <img src={EmptyCart} alt="Carrinho vazio" />
                    </li>
                </ul>
            ) : (
                <>
                <ul className='cart-list'>
                    {currentSale.map((product, index) => 
                    <CartProduct removeItem={removeItem} product={product} key={index}/>                
                    )} 
                </ul> 
                </>   
            )}    
           
            {currentSale.length !== 0 && <CartTotal currentSale={currentSale} 
            setCurrentSale={setCurrentSale}/> }
        </>
    )
}

export default Cart