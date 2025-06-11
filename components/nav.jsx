import Link from 'next/link'
import Image from 'next/image'
import './Nav.scss'

export default function Barra() {
  return (
    <header id="id-barra" className="barra">
      <Link href="/">
        <Image src="/hero-logo.webp" alt="Logo Hogwarts Legacy" width="50" height="50" className="nav-logo" />
      </Link>
      <nav id="MainNav" className="barra-menu">
        <ul id="menu">
          <li className="barra-menu-item"><Link href="/sobre">Sobre</Link></li>
          <li className="barra-menu-item"><Link href="/midia">Mídia</Link></li>
          <li className="barra-menu-item"><Link href="/comunidade">Comunidade</Link></li>
        </ul>
      </nav>
    </header>
  )
}
