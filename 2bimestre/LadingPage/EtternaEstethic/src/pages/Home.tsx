import { useEffect, useState } from "react";
import logoEtterna from "../assets/logo.png";
import Champion_pente from "../assets/pente.svg";
import Champion_sombrancelha from "../assets/sombrancelha.svg";
import Champion_dermatology from "../assets/dermatology.svg";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import "../styles/header.css";
import "../styles/testimonials.css";
import "../styles/hero.css";
import "../styles/solutions.css";
import "../styles/index.css";
import "../styles/button.css";
import "../styles/utility.css";
import "../styles/recaptcha.css";

import Button from "../components/Button";
import HeroRectangleOne from "../assets/HeroRectangleOne.png";
import fotomariane from "../assets/mariane.png";
import Card from "../components/Card/Card.tsx";
import Recaptcha from "../components/Recaptcha/Recaptcha.tsx";
import TestimonialCard from "../components/Card/TestimonialCard.tsx";
import pessoa1 from "../assets/pessoa1.png";
import pessoa2 from "../assets/pessoa2.png";
import pessoa3 from "../assets/pessoa3.png";
import pessoa4 from "../assets/pessoa4.png";
import pessoa5 from "../assets/pessoa5.png";
import pessoa6 from "../assets/pessoa6.png";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  const testimonials = [
    {
      imagemPerfil: pessoa1,
      testemunho:
        "Atendimento excelente, ambiente confortável e resultado acima do esperado.",
      nome: "Ana Paula",
      cargo: "Empresária",
      quantidadeEstrelas: 5,
    },
    {
      imagemPerfil: pessoa2,
      testemunho:
        "Fui muito bem atendida e senti segurança durante todo o procedimento.",
      nome: "Mariana Costa",
      cargo: "Psicóloga",
      quantidadeEstrelas: 5,
    },
    {
      imagemPerfil: pessoa3,
      testemunho:
        "Profissional cuidadosa, explica tudo com calma e entrega um ótimo resultado.",
      nome: "Camila Rocha",
      cargo: "Farmacêutica",
      quantidadeEstrelas: 5,
    },
    {
      imagemPerfil: pessoa4,
      testemunho:
        "Gostei muito do cuidado nos detalhes e da qualidade do atendimento.",
      nome: "Juliana Martins",
      cargo: "Arquiteta",
      quantidadeEstrelas: 5,
    },
    {
      imagemPerfil: pessoa5,
      testemunho:
        "Minha autoestima melhorou muito depois do tratamento. Recomendo.",
      nome: "Beatriz Lima",
      cargo: "Gerente de Vendas",
      quantidadeEstrelas: 5,
    },
    {
      imagemPerfil: pessoa6,
      testemunho:
        "Ambiente limpo, atendimento pontual e resultado muito natural.",
      nome: "Fernanda Alves",
      cargo: "Advogada",
      quantidadeEstrelas: 5,
    },
  ];

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
              Resultados que geram além do esperado, mais do que procedimentos
              estéticos, a <strong>Etterna Estethic</strong> oferece uma
              experiência completa de cuidado, confiança e bem-estar.
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

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">
              Opinião de quem já viveu a experiência
            </p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Quem já realizou nossos procedimentos conhece a{" "}
            <strong>qualidade</strong> do nosso atendimento. Cuidamos de cada
            detalhe para entregar resultados naturais, <strong>seguros</strong>{" "}
            e <strong>alinhados</strong>
            com a sua beleza. Acompanhe abaixo os depoimentos de quem já confiou
            e aprovou.
          </p>
        </header>
        <section className="carousel">
          <div className="carousel-content">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={index}
                imagemPerfil={testimonial.imagemPerfil}
                testemunho={testimonial.testemunho}
                nome={testimonial.nome}
                cargo={testimonial.cargo}
                quantidadeEstrelas={testimonial.quantidadeEstrelas}
              />
            ))}
          </div>
        </section>
      </section>
        {/* continuar daqui */}

        {/* <section id="pricing" className="container">
        <header>
        <p className="desktop-only">Planos e preços</p>
        <h2>Nossos planos</h2>
          </header>
         <section className="even-columns gap-1.5">

        <div className="pricing-card">
             <span className="plan">
        <h3>Básico</h3>
        <p>Você tem direito a uma prova das comidas DonaFrost.</p>
               </span>
	         <h2>Grátis</h2>
	           <Button text="Pedir agora" secondary key="free" />
	             <span className="hr" /><span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>Retire na loja</p>
          </span>
           <ul className="features">
        <li>
	        <img src={Check} alt="ícone check" width={24} height={24} />
	        <p>Apenas 1 por CPF</p>
	      </li>
         </ul>
      </div>
           <div className="pricing-card premium">
	   <span className="bonus">
		    <p>1º MÊS COM DESCONTO</p>
	   </span>
	   <span className="plan">
        <h3>Premium</h3>
        <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
    </span>
    <span className="price">
        <h2>R$ 89,90</h2>
        <p>/mês</p>
    </span>
    <Button text="Pedir agora" key="premium" />
    <span className="hr" />
    <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>2 Entregas</p>
     </span>
      <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>5 Refeições por semana</p>
      </span>
     <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>2 Sucos por semana</p>
     </span>
     </div>
      </section> */}
            {/* daqui pra baixo recaptcha */}
      <section id="contact" className="container">
        <header>
          <h2>Entre em contato</h2>
          <p>Preencha os dados abaixo para falar conosco.</p>
        </header>
        <Recaptcha />
      </section>
    </>
  );
}
