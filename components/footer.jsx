import Image from 'next/image'

export default function Rodape() {
  return (
    <footer className="rodape">
      <p>Hogwarts Legacy Fake Page</p>
      <span>Desenvolvido por Marcos Castro</span>
      <div className="rodape-media">
        <a href="https://github.com/MarcosCast">
          <Image src="/images/linkedin.png" alt="github" width="24" height="24" />
        </a>
        <a href="https://www.linkedin.com/in/marcos--castro/">
          <Image src="/images/github.png" alt="linkedin" width="24" height="24" />
        </a>
      </div>
    </footer>
  )
}
