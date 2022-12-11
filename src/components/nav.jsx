import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Barra() {
    return(
      <header id="id-barra" className="barra">
          <a href="index.html" /*role="menuitem" aria-label="Home Page" */>
            <Link to="/"><img src={logo} className="nav-logo" alt="Logo Hogwarts Legacy"/></Link>
          </a>

      <nav id='MainNav' /*data-toggle="collapse" data-target=".nav-collapse"*/ className="barra-menu">
          <ul id='menu'>
           <a className="barra-menu-item" href='Sobre' ><Link to="/sobre"> Sobre </Link></a>
           <a className="barra-menu-item" href='Midia' ><Link to="/midia"> Mídia </Link></a>
           <a className="barra-menu-item" href='Comunidade' ><Link to="/comunidade"> Comunidade </Link></a>
         </ul>    
      </nav>
        
      </header>
    )
}

export default Barra;