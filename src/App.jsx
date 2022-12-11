//import logo from './logo.svg';
import './App.css';
//import hero from './hero.mp4';
import Barra from './components/nav';
import Rodape from './components/footer';
import ps5 from './ps5.svg';


function App() {
  return (
    <div className="App">
      
      <Barra />         
      <div className="main">

        <div className='center'>           
            <video autoPlay= "autoplay" muted="muted" loop="loop" 
             playsInline src='https://cdn-hogwartslegacy.warnerbrosgames.com/home/hero.mp4?c=b'
             class="trailer-video">
            </video>            
         <section class="center-cabe">
          <div class="center-prime-texto">
           <h1 class="center-prime-texto-titulo">Hogwarts Legacy</h1>
           <h2 class="center-prime-texto-subtitulo">Imersa nesse mundo de aventura RPG em Hogwarts!</h2>
           <button /*href=""*/ class={ps5}>Compre Agora</button>
          </div>
           <img class="center-prime-texto-imagem"src="ballebot.svg" alt="Imagem do Game HL-PS5" />
         </section>

         <section class="center-corpo">
          <h3 class="center-corpo-titulo">Hogwarts 1800</h3>
          <p class="center-corpo-paragrafo">Venha para Hogwarts 
           <strong>se torne um BRUXO </strong> 
            na sua casa favorita.
          </p>
          <p class="center-corpo-paragrafo">Participe das aulas
           <strong>e aprenda magias </strong> 
            , incluindo as artes das trevas
          </p>
          <p class="center-corpo-paragrafo">Seja  
           <strong>o protagonista </strong>
            da sua própria história
          </p>
         </section>
        </div>
          <Rodape />
      </div>
    </div>
  );
}

export default App;
