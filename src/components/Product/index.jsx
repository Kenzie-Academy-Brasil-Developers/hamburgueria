import './styles.css'

const Product = ({id, img, name, category, price, handleClick}) => {

    return (
        <>
            <li key={id} id={id} className="lista-produtos">
                <figure className='imgProduct'>
                    <img src={img} alt={name} />
                </figure>
                <div className='infosProducts'>
                    <h3 className='nameList'>{name}</h3>
                    <span className='categoryList'>{category}</span>
                    <span className='priceList'>R$: {price.toFixed(2)}</span>
                    <button className="btn-add" data-id={id} onClick={() => handleClick(id)}>Adicionar</button>
                </div>
            </li>
        </>
    )
}

export default Product