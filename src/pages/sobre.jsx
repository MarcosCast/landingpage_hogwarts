import Barra from '../components/nav';
import Rodape from '../components/footer';



function Sobre() {
    return(   
     <div className="App">      
       <Barra />   
        <main>  
         <div className='center-sobre'>           
               
         <section class="center-prime">
          <div class="center-prime-texto">
           <h1 class="center-prime-texto-titulo">O QUE É HOGWARTS LEGACY?</h1>
           <h2 class="center-prime-texto-subtitulo">
            <p>Hogwarts Legacy é um jogo de ação e RPG imersivo e de mundo aberto, 
              ambientado no primeiro mundo apresentado nos livros da série Harry Potter. </p>
            <p>Embarque em uma jornada por locais familiares e novos enquanto explora e descobre criaturas fantásticas,
               personaliza seu personagem e cria poções, domina feitiços, 
               melhora talentos e se torna o bruxo que você sempre quis ser.</p>
            <p>Viva na Hogwarts do século XIX. 
              Seu personagem é um estudante que possui a chave para um segredo antigo, 
              o qual ameaça destroçar o mundo bruxo. Descubra a sensação de viver em Hogwarts enquanto faz aliados, 
              enfrenta bruxos das trevas e decide o destino do mundo bruxo. </p>
    
            Você decide seu legado. Viva o que não foi escrito.</h2>
           
            
          </div>
         
         </section>

         <section class="center-corpo">
          <h3 class="center-corpo-titulo">Mais algumas informações</h3>
          <p class="center-corpo-paragrafo">Hogwarts Legacy será lançado no dia  
           <strong> 10 de fevereiro de 2023 </strong> 
            para PlayStation, Xbox e PC. A data de lançamento para Nintendo Switch será revelada em breve.
          </p>
          <p class="center-corpo-paragrafo">Hogwarts Legacy estará disponível para os consoles
           <strong> PlayStation®5, PlayStation®4, PlayStation®4 Pro, Xbox Series X|S, Xbox One, Nintendo Switch e PC.</strong> 
            
          </p>
          <p class="center-corpo-paragrafo">É possível vincular os dados da sua conta   
           <strong> <a href='https://www.wizardingworld.com'>Wizarding World</a>  </strong>
            ao jogo e assim aprimorar a sua história
          </p>
         </section>
        </div>
        </main>
      <Rodape />
    </div>
    )
}

export default Sobre;