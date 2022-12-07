import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">


      <nav id='MainNav' role={"menubar"} className="barra">
        <div className='mob-menu' >
          <a href="http://www.hogwartslegacy.com/pt-br" role="menuitem" aria-label="Home Page" class="logo">
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
        </div>        


      </nav>
      <div className="Main">
           
           <div className="menu">
                  <div className="logo">
                    <h2>Hogwarts Legacy</h2>
               

                  </div>

            
           </div>

      </div>
    </div>
  );
}

export default App;
