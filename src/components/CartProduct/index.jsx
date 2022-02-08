import './styles.css'


const CartProduct = ({product, removeItem}) => {

    return (
        <>
            <li key={product.id} id={product.id} className='list-cart'>
                <div className="img-cart">
                    <figure>
                        <img src={product.img} alt={product.name} />
                    </figure>
                </div>
                <div className='infos-cart'>
                    <h3>{product.name}</h3>
                    <span>{product.category}</span>
                </div>
                <div className='div-remove'>
                    <button className='remove-cart' onClick={() => removeItem(product)}>Remover</button>
                </div>
            </li>
        </>
    )
}

export default CartProduct