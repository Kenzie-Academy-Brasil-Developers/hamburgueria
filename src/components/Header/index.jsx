import logo from './logo.svg'
import InputSearch from '../InputSearch'
import './styles.css'

const Header = () => {
    return (
        <header>
            <figure>
                <img src={logo} alt="Burguer Kenzie" />
            </figure>
            <div className='sectionSearch'>
                <InputSearch className="inputSearch" placeholder='Digitar pesquisa'/>
                <button className='search'>Pesquisar</button>
            </div>
        </header>

    )
}

export default Header