import logo from '../logo.svg';

function Barra() {
    return(
        <nav id='MainNav' role={"menubar"} className="barra">
        <div className='mob-menu' >
          <a href="http://www.hogwartslegacy.com/pt-br" role="menuitem" aria-label="Home Page" class="logo">
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
        </div>    
      </nav>
    )
}

export default Barra;