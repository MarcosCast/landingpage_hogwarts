import { Link } from 'react-router-dom';
//import logo from '../logo.svg';
import Hero from '../hero-logo.webp';
import './Nav.scss';

function Barra() {
    return(
      <header id="id-barra" className="barra">
          <Link to="/">
            <img src={Hero} className="nav-logo" alt="Logo Hogwarts Legacy"/>
          </Link>

          <nav id='MainNav' /*data-toggle="collapse" data-target=".nav-collapse"*/ className="barra-menu">
          <ul id='menu'>
           <Link to="/sobre" className="barra-menu-item"> Sobre </Link>
           <Link to="/midia" className="barra-menu-item"> Mídia </Link>
           <Link to="/comunidade" className="barra-menu-item"> Comunidade </Link>
         </ul>
      </nav>
      </header>
    )
}

export default Barra;