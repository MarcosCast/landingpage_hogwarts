//import logo from './logo.svg';
import './App.css';
//import hero from './hero.mp4';
import Barra from './components/nav';


function App() {
  return (
    <div className="App">
      <Barra />
      <Barra />

      

      <div className="main">
        <div className='center'>           
           <div className="menu">
            <video autoPlay= "autoplay" muted="muted" loop="loop" 
             playsInline src='https://cdn-hogwartslegacy.warnerbrosgames.com/home/hero.mp4?c=b'
             class="trailer-video">
            </video>            
                  <div className="logo">
                    <h2>Hogwarts Legacy</h2>
                    <p>
                      Bem vindos ao hogwarts Legacy
                    </p>
                    
               

                  </div>
              
            

            
           </div>
          </div>
      </div>
    </div>
  );
}

export default App;
