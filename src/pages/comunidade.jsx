import Barra from '../components/nav';
import Rodape from '../components/footer';

import Discord from '../images/discord.png';
import Youtube from '../images/youtube.png';
import Twitter from '../images/twitter.png';
import Instagram from '../images/instagram.png';



function Comunidade() {
    return(
        <div className="App">      
        <Barra />   
         <main>  
         <div class="center">
            <div class="center-prime">
                <div class="center-prime-texto-titulo">
                    <p class="title nome">Comunidade</p>
                    <figure class="image">
                    </figure>
                    <p class="center-prime-texto-subtitulo">Acesse nossas redes</p>
                </div>
                <div class="center-corpo-comu">
                    <p class="center-prime-texto-titulo">Redes Sociais</p>
                    <a href="https://discord.com/invite/HogwartsLegacy" class="box" id="anchors">
                        <img src={Discord} class="rede-img"/>
                        <p>Entre na nossa comunidade no Discord</p>
                    </a>
                    <a href="https://www.youtube.com/HogwartsLegacy" class="box" id="anchors">
                        <img src={Youtube} class="rede-img"/>
                        <p>Veja todos os vídeos incríveis no YouTube</p>
                    </a>
                    <a href="https://twitter.com/HogwartsLegacy" class="box" id="anchors">
                        <img src={Twitter} class="rede-img"/>
                        <p>Não esqueça de nos seguir</p>
                    </a>
                    <a href="https://www.instagram.com/devparadev/" class="box" id="anchors">
                        <img src={Instagram} class="rede-img"/>
                        <p>Nos acompanhe no Instagram</p>
                    </a>
                    <p><b>Baixe esses lindos Wallpappers</b></p>
                    <button class="center-prime-texto-botao" type='button'>
                    <a href='https://cdn-hogwartslegacy.warnerbrosgames.com/community/downloads/wallpapers.zip'>
                      Download</a></button>
                    
                </div>
        </div>
    </div>
  
           </main>
       <Rodape />
     </div>
    )
}

export default Comunidade;