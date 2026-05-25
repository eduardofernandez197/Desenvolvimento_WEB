import { useEffect, useState } from "react";
import logoEtterna from "../assets/logo.png";
import Champion_pente from "../assets/pente.svg";
import Champion_sombrancelha from "../assets/sombrancelha.svg";
import Champion_dermatology from "../assets/dermatology.svg";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solutions.css";
import Button from "../components/Button";
import HeroRectangleOne from "../assets/HeroRectangleOne.png";
import fotomariane from "../assets/mariane.png";
import "../styles/hero.css";
import Card from "../components/Card/Card";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={logoEtterna} alt="Logo Etterna" width={190} height={190} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#solution"
                      >
                        Soluções
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#testimonials"
                      >
                        Depoimentos
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#pricing"
                      >
                        Preços
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#contact"
                      >
                        Contato
                      </a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img
            src={fotomariane}
            className="fotomariane"
            alt="Retangulo um tela inicial"
            height={360}
            width={280}
          />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

        <div className="container content">
          <p className="desktop-only">Bem vindo!</p>
          <h1>
            Mais do que estética, oferecemos qualidade, e resultados que
            transformam sua autoestima
          </h1>
          <p>
            Realce sua beleza com procedimentos de alta qualidade, tecnologia
            avançada e cuidados, trazendo confiança e bem-estar em cada detalhe.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Agende aqui" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        {
          <header>
            <span className="solution-titles">
              <h2>Soluções</h2>
              <span className="desktop-only">
                <h2>Por que escolher Etterna Estethic?</h2>
              </span>
            </span>
            <p>
              Resultados que geram além do esperado, mais do que procedimentos estéticos, a <strong>Etterna Estethic</strong> oferece uma experiência completa de cuidado, confiança e bem-estar.
            </p>
          </header>
        }

        <section className="even-columns">
          <Card
            imagem={Champion_sombrancelha}
            alt="ícone.campeão"
            titulo="Microagulhamento Estimulante"
            texto="Estimule a produção natural de colágeno e conquiste sobrancelhas mais definidas, harmoniosas e cheias de personalidade."
          />

          <Card
            imagem={Champion_pente}
            alt="ícone.campeão"
            titulo="Terapia Capilar com Alta Frequência"
            texto="A tecnologia da alta frequência auxilia na saúde do couro cabeludo, fortalecendo os fios e estimulando um crescimento mais saudável."
          />
          <Card
            imagem={Champion_dermatology}
            alt="ícone.campeão"
            titulo="Tratamentos Dermatológicos"
            texto="Cuidados especializados para revitalizar, equilibrar e revelar a melhor versão da sua pele com segurança e eficácia com produtos dermatológicamente testados."
          />
        </section>
      </section>
    </>
  );
}
