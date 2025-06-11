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
         <div className="center">
            <div className="center-prime">
                <div className="center-prime-texto-titulo">
                    <p className="title nome">Comunidade</p>
                    <figure className="image">
                    </figure>
                    <p className="center-prime-texto-subtitulo">Acesse nossas redes</p>
                </div>
                <div className="center-corpo-comu">
                    <p className="center-prime-texto-titulo">Redes Sociais</p>
                    <a href="https://discord.com/invite/HogwartsLegacy" className="box" id="anchors">
                        <img src={Discord} className="rede-img"/>
                        <p>Entre na nossa comunidade no Discord</p>
                    </a>
                    <a href="https://www.youtube.com/HogwartsLegacy" className="box" id="anchors">
                        <img src={Youtube} className="rede-img"/>
                        <p>Veja todos os vídeos incríveis no YouTube</p>
                    </a>
                    <a href="https://twitter.com/HogwartsLegacy" className="box" id="anchors">
                        <img src={Twitter} className="rede-img"/>
                        <p>Não esqueça de nos seguir</p>
                    </a>
                    <a href="https://www.instagram.com/HogwartsLegacy/" className="box" id="anchors">
                        <img src={Instagram} className="rede-img"/>
                        <p>Nos acompanhe no Instagram</p>
                    </a>
                    <p><b>Baixe esses lindos Wallpappers</b></p>
                    <button className="center-prime-texto-botao" type='button'>
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