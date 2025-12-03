import React from 'react';

import Hero from '../hero-logo.webp';
import './Nav.scss';

function Barra() {
  return (
    <header className="barra">
      <div className="logo-wrap">
        <a href="#inicio" aria-label="Início">
          <img src={Hero} className="nav-logo" alt="Logo Hogwarts Legacy" />
        </a>
        <span className="logo-title">Hogwarts Legacy</span>
      </div>

      <nav className="barra-menu" aria-label="Navegação principal">
        <a className="barra-menu-item" href="#experiencia">
          Experiência
        </a>
        <a className="barra-menu-item" href="#historia">
          Narrativa
        </a>
        <a className="barra-menu-item" href="#galeria">
          Galeria
        </a>
        <a className="barra-menu-item" href="#casas">
          Casas
        </a>
        <a className="barra-menu-item" href="#comunidade">
          Comunidade
        </a>
      </nav>
    </header>
  );
}

export default Barra;
