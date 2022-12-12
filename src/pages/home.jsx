import PS5 from '../images/PS5.svg';

import Barra from '../components/nav';
import Rodape from '../components/footer';

function Home() {
    return(
      <div className="App">      
       <Barra />   
        <main>  
         <div className='center'>           
            <video autoPlay= "autoplay" muted="muted" loop="loop" 
             playsInline src='https://cdn-hogwartslegacy.warnerbrosgames.com/home/hero.mp4?c=b'
             class="trailer-video">
            </video>       
            <br/>     
         <section class="center-prime">
          <div class="center-prime-texto">
           <h1 class="center-prime-texto-titulo">Hogwarts Legacy</h1>
           <h2 class="center-prime-texto-subtitulo">Aproveite a imersão nesse mundo de aventura RPG em Hogwarts!</h2>
           <a href='https://www.hogwartslegacy.com/pt-br/purchase'><button class="center-prime-texto-botao" type='button'>
            Compre Agora</button></a>
          </div>
          <img class="center-prime-imagem" src={PS5} alt="Imagem do Game em PS5" />
         </section>

         <section class="center-corpo">
          <h3 class="center-corpo-titulo">Hogwarts Século XIX</h3>
          <p class="center-corpo-paragrafo">Venha para Hogwarts 
           <strong> se torne um BRUXO </strong> 
            na sua casa favorita.
          </p>
          <p class="center-corpo-paragrafo">Participe das aulas
           <strong> e aprenda magias</strong> 
            , incluindo as artes das trevas
          </p>
          <p class="center-corpo-paragrafo">Seja  
           <strong> o protagonista </strong>
            da sua própria história
          </p>
         </section>
        </div>
        </main>
      <Rodape />
    </div>
    )
}

export default Home;