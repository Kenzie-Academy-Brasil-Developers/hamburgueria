import './reset.css'
import './App.css';
import {useState, useEffect} from 'react'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])


  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
  



  const handleClick  = (idProduct) => {
    const findProduct = products.find(({id}) => id === idProduct)
    const duplicateProduct = currentSale.some(({id}) => id === idProduct)

    duplicateProduct ? (
      alert('vc ja tem esse produto no carrinho')
    ) : (
      setCurrentSale([...currentSale, findProduct])
    )
  }
  console.log(currentSale)
  return (
    <>
      <Header />
      <main className="main">
        <section className='section-vitrine'>
        <ProductList products={products} 
        handleClick={handleClick} 
        filteredProducts={filteredProducts}/>
        </section>
      
        <aside className='aside-cart'>
          <div className='title-cart'>
            <h1>Carrinho de compras</h1>
          </div>
            <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
        </aside>
      </main>
    </>
  );
}

export default App;
