import React from 'react';

import Barra from './components/nav';
import Rodape from './components/footer';
import HeroLogo from './hero-logo.webp';
import heroVideo from './hero.mp4';
import posterChar from './images/posterchar.png';

import './App.scss';

const featureCards = [
  {
    title: 'Magia viva',
    description:
      'Aprimore feitiços, descubra segredos antigos e crie um legado que responde às suas escolhas.',
  },
  {
    title: 'Exploração cinematográfica',
    description:
      'Voe sobre o castelo, atravesse a Floresta Proibida e encontre criaturas fantásticas em um mundo aberto vibrante.',
  },
  {
    title: 'Seu estilo, sua casa',
    description:
      'Monte poções, personalize varinhas e defina sua jornada com uma identidade visual inspirada na casa escolhida.',
  },
];

const houseHighlights = [
  {
    name: 'Grifinória',
    color: 'var(--crimson)',
    detail: 'Coragem, lealdade e duelos inesquecíveis em salões iluminados por vitrais rubros.',
  },
  {
    name: 'Sonserina',
    color: 'var(--emerald)',
    detail: 'Ambição estratégica, alianças poderosas e a arte das poções levada ao limite.',
  },
  {
    name: 'Corvinal',
    color: 'var(--cobalt)',
    detail: 'Intelecto aguçado, enigmas antigos e a biblioteca secreta que guarda tomos proibidos.',
  },
  {
    name: 'Lufa-Lufa',
    color: 'var(--amber)',
    detail: 'Resiliência, amizade verdadeira e estufas cheias de ingredientes raros.',
  },
];

function App() {
  return (
    <div className="App">
      <div className="background-gradient" aria-hidden="true" />
      <Barra />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-media">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={HeroLogo}
              src={heroVideo}
              className="hero-video"
            />
            <div className="glass-card hero-badge">
              <p>Experimente a nova geração de Hogwarts</p>
              <span>4K • Haptic Feedback • Ray Tracing</span>
            </div>
          </div>
          <div className="hero-copy glass-card">
            <p className="eyebrow">RPG imersivo • Século XIX</p>
            <h1>Hogwarts Legacy</h1>
            <p className="lead">
              Reviva a magia com um visual de vidro translúcido, inspirado no glasmorphism, e explore um mundo
              aberto cheio de histórias inéditas.
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href="https://www.hogwartslegacy.com/pt-br/purchase"
                target="_blank"
                rel="noreferrer"
              >
                Comprar agora
              </a>
              <a className="button ghost" href="#galeria">
                Ver trailer e mídia
              </a>
            </div>
          </div>
        </section>

        <section className="feature-grid" id="experiencia">
          {featureCards.map((item) => (
            <article key={item.title} className="glass-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="split" id="historia">
          <div className="glass-card story">
            <p className="eyebrow">Legado em vidro</p>
            <h2>Construa sua narrativa</h2>
            <p>
              Explore Hogwarts e seus arredores com uma estética moderna que mistura névoa, brilho e transparências.
              Cada decisão desbloqueia caminhos únicos, professores exclusivos e inimigos surpreendentes.
            </p>
            <ul>
              <li>Salas Comuns com ambientação dinâmica e iluminação volumétrica.</li>
              <li>Companheiros com histórias paralelas que reagem às suas escolhas.</li>
              <li>Montarias mágicas para explorar o mapa em tempo real.</li>
            </ul>
            <div className="cta-row">
              <a className="button ghost" href="#comunidade">
                Comunidade oficial
              </a>
              <a className="button text" href="https://cdn-hogwartslegacy.warnerbrosgames.com/community/downloads/wallpapers.zip">
                Baixar wallpapers
              </a>
            </div>
          </div>
          <div className="glass-card media-card" id="galeria">
            <img src={posterChar} alt="Personagens de Hogwarts Legacy" className="media-image" />
            <div className="media-overlay">
              <p>Descubra os segredos de 1890 em Hogwarts</p>
              <span>Capturas em tempo real do PS5</span>
            </div>
          </div>
        </section>

        <section className="house-grid" id="casas">
          <h2>Escolha sua casa</h2>
          <div className="house-cards">
            {houseHighlights.map((house) => (
              <article key={house.name} className="glass-card house-card">
                <div className="house-accent" style={{ background: house.color }} />
                <div>
                  <h3>{house.name}</h3>
                  <p>{house.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" id="comunidade">
          <div className="glass-card cta-card">
            <div>
              <p className="eyebrow">Comunidade global</p>
              <h2>Junte-se aos bruxos e bruxas</h2>
              <p>
                Entre nos canais oficiais para receber novidades, compartilhar capturas com a estética de vidro e
                participar de eventos exclusivos.
              </p>
              <div className="social-links">
                <a href="https://discord.com/invite/HogwartsLegacy" className="pill" target="_blank" rel="noreferrer">
                  Discord
                </a>
                <a href="https://www.youtube.com/HogwartsLegacy" className="pill" target="_blank" rel="noreferrer">
                  YouTube
                </a>
                <a href="https://twitter.com/HogwartsLegacy" className="pill" target="_blank" rel="noreferrer">
                  Twitter/X
                </a>
                <a
                  href="https://www.instagram.com/HogwartsLegacy/"
                  className="pill"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="cta-actions">
              <a
                className="button primary"
                href="https://cdn-hogwartslegacy.warnerbrosgames.com/community/downloads/wallpapers.zip"
              >
                Download de artes
              </a>
              <a className="button ghost" href="#inicio">
                Voltar ao topo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
}

export default App;
