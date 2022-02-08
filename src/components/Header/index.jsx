import logo from './logo.svg'
import InputSearch from '../InputSearch'
import './styles.css'

const Header = ({search, setSearch, searchInput, products}) => {
 
    return (
        <header>
            <figure>
                <img src={logo} alt="Burguer Kenzie" />
            </figure>
            <div className='sectionSearch'>
                <InputSearch className="inputSearch"
                 placeholder='Digitar pesquisa'
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 />
                <button className='search' onClick={searchInput}>Pesquisar</button>               
            </div>
        </header>

    )
}

export default Header