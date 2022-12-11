import Barra from '../components/nav';
import Rodape from '../components/footer';

import Fire from '../images/Fire.svg';



function V2() {
    return(
        <div className="App">      
        <Barra />   
         <main>  
          <div className='center-midia'>
            <div className="center-midia-texto">
              <h1>Mídia</h1><br/>
              <h3>Fotos</h3><br/>
               </div>

               <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={Fire} class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Primeiro Exemplo</h5>
                        <p>Aprenda magias poderosas</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-01.jpg" class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Segundo Exemplo</h5>
                        <p>Lute contra seres mitológicos</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-02.jpg" class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Terceiro Exemplo</h5>
                        <p>Ande e desfrute do Castelo de Hogwarts</p>
                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

                <div class="center-midia-texto">
                  <h3>Vídeos</h3><br/>
                  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                       <iframe width="360" height="180" src="https://www.youtube.com/embed/yF29baX-IsA" 
                       title="Hogwarts Legacy - Trailer Dublado | PS5" frameborder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowfullscreen></iframe>
                      </div>
                      <div class="carousel-item">
                       <iframe width="360" height="180" src="https://www.youtube.com/embed/6gwdAdwmJB4" 
                       title="Hogwarts Legacy State of Play – Gameplay Oficial 4K Dublado e Legendado" frameborder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowfullscreen></iframe>
                      </div>
                      <div class="carousel-item">
                       <iframe width="360" height="180" src="https://www.youtube.com/embed/jao_1l2xKX4" 
                       title="Hogwarts Legacy - Bastidores 4K Legendado" frameborder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowfullscreen></iframe>
                      </div>
                      <div class="carousel-item">
                       <iframe width="360" height="180" src="https://www.youtube.com/embed/qVgOzNgheMA" 
                       title="Hogwarts Legacy - O Legado Sombrio de Sebastian Sallow - 4K" frameborder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowfullscreen></iframe>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>






                
                            
                  
                </div>

                
                              
          
             
            </div>
           </main>
       <Rodape />
     </div>
    )
}

export default V2;