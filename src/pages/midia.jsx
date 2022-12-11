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
                        <p>Inserir texto representando o slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-01.jpg" class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Segundo Exemplo</h5>
                        <p>Inserir texto representando o slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-02.jpg" class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Terceiro Exemplo</h5>
                        <p>Inserir texto representando o slide.</p>
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

                
                              
          
             
            </div>
           </main>
       <Rodape />
     </div>
    )
}

export default V2;