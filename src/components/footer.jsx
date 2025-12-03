import React from 'react';

import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import './Footer.scss';

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-copy">
        <p>Hogwarts Legacy — experiência conceitual em glasmorphism.</p>
        <span>Construído por Marcos Castro.</span>
      </div>
      <div className="rodape-media" aria-label="Perfis do desenvolvedor">
        <a href="https://github.com/MarcosCast" aria-label="GitHub" target="_blank" rel="noreferrer">
          <img src={Github} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcos--castro/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Rodape;
