import logo from '../logo.svg';

function Barra() {
    return(
      <header id="id-barra" className="barra">
          <a href="http://www.hogwartslegacy.com/pt-br" /*role="menuitem" aria-label="Home Page" class=""*/>
            <img src={logo} className="nav-logo" alt="logo"/>
          </a>
      <nav /*id='MainNav' role={"menubar"}*/ className="barra-menu">
          <ul id='menu'>
           <a className="barra-menu-item"href="#L384" /*role="menuitem" aria-label="Home Page"*/> 
           Area 1 </a>
           <a className="barra-menu-item" href="#details" /*role="menuitem" aria-label="Home Page"*/> 
           Area 2 </a>
           <a className="barra-menu-item" href="#FAQ"/* role="menuitem" aria-label="Home Page"*/> 
           Area 3 </a>
         </ul>  
      </nav>
      </header>
    )
}

export default Barra;