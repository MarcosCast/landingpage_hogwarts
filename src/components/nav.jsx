import logo from '../logo.svg';

function Barra() {
    return(
      <header id="id-barra" className="barra">
          <a href="index.html" /*role="menuitem" aria-label="Home Page" */>
            <img src={logo} className="nav-logo" alt="Logo Hogwarts Legacy"/>
          </a>

      <nav id='MainNav' /*data-toggle="collapse" data-target=".nav-collapse"*/ className="barra-menu">
          <ul id='menu'>
           <a className="barra-menu-item" href="#123" role="menuitem" aria-label="Home Page"> 
           Area 1 </a>
           <a className="barra-menu-item" href="#details" role="menuitem" aria-label="Home Page"> 
           Area 2 </a>
           <a className="barra-menu-item" href="#FAQ" role="menuitem" aria-label="Home Page"> 
           Area 3 </a>
         </ul>  
      </nav>
        
      </header>
    )
}

export default Barra;