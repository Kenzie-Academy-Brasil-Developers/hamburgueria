import './styles.css'

const CartTotal = ({currentSale}) => {

    const total = currentSale.reduce((acc ,{price}) => acc + price, 0)

    return (
        <footer>
            <hr></hr>
            <div className='footer-cart'>
                <span className='cart-total'>Total</span>
                <span className='cart-price'>R$: {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <button className='remove-everyone'>Remover todos</button>
        </footer>
    )
}

export default CartTotal