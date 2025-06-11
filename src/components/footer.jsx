import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import './Footer.scss';

function Rodape() {
    return (
        <footer className="rodape">
        <p>Hogwarts Legacy Fake Page</p>
        <span>Desenvolvido por Marcos Castro</span>
        <div className="rodape-media">
          <a href="https://github.com/MarcosCast"><img src={Linkedin} alt="github"/></a>
          <a href="https://www.linkedin.com/in/marcos--castro/"><img src={Github} alt="linkedin"/></a>
        </div>
        </footer>        
    )    
}

export default Rodape;