import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <header>
        <nav>
            <ul>
                <Link className='link' to={'/'}> Home</Link>
                <Link className='link' to={'/exposicoes'}> Exposições</Link>
                <Link className='link' to={'/sobre'}> Sobre</Link>
                <Link className='link' to={'/contato'}> Contato</Link>
             
                
            </ul>
        </nav>
    </header>


    ) 

        
    
}

export default Header;


