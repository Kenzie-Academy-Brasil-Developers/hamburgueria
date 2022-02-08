import './styles.css'

const CartTotal = ({currentSale, setCurrentSale}) => {

    const total = currentSale.reduce((acc ,{price}) => acc + price, 0)
    const removeAll = () => {

        return setCurrentSale([])
    }


    return (
        <footer>
            <hr></hr>
            <div className='footer-cart'>
                <span className='cart-total'>Total</span>
                <span className='cart-price'>R$: {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <button className='remove-everyone' onClick={removeAll}>Remover todos</button>
        </footer>
    )
}

export default CartTotal