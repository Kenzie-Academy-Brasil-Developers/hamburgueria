import './reset.css'
import './App.css';
import {useState, useEffect} from 'react'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
  

  const handleClick  = (idProduct) => {
    const findProduct = products.find(({id}) => id === idProduct)
    const duplicateProduct = currentSale.some(({id}) => id === idProduct)

    duplicateProduct ? (
      alert('Este produto ja está no carrinho!')
    ) : (
      setCurrentSale([...currentSale, findProduct])
    )
  }

  const searchInput = () => {
    const productsFilter = products.filter(({name,category}) => name.toLowerCase().includes(search.toLowerCase()) ||
     category.toLowerCase().includes(search.toLowerCase()))

    setFilteredProducts(productsFilter)
  }
  
  return (
    <>
      
      <Header search={search} setSearch={setSearch} searchInput={searchInput} products={products}/>
      <main className="main">
        <section className='section-vitrine'>
        <ProductList products={products} 
        handleClick={handleClick} 
        filteredProducts={filteredProducts}
        search={search}/>
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
