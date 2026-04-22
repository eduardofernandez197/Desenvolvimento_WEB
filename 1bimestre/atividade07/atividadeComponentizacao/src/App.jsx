import Article from "./components/Article/Article";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import "./index.css";

const posts = [

" Preço do Bezerro em 2026?",
" Melhores Pastagens para Nelore",
" Exportação: O impacto do dólar",

]

export default function App() {
  return (
    <>
      <Header />

      <Article
        titulo="Arroba do Boi Gordo atinge R$ 360,00: O que esperar para 2026?"
        conteudo1=" O mercado pecuário brasileiro iniciou o ano de 2026 com uma valorização histórica, levando a arroba do boi gordo a patamares que 
            desafiam o planejamento dos frigoríficos. Essa subida repentina é reflexo direto da menor oferta de animais prontos para o abate, 
            após um longo período de retenção de fêmeas pelos produtores que buscam recompor o rebanho."
        conteudo2="Além do cenário interno, a forte demanda internacional, especialmente vinda do mercado asiático, continua pressionando 
            os preços para cima. Para o pecuarista, o momento é de oportunidade para maximizar os lucros, mas exige cautela redobrada
             com os custos de reposição e com a gestão das pastagens para garantir que o animal atinja o peso ideal no menor tempo possível."
        img="https://img.cdndsgni.com/preview/10598297.jpg"
        alt="Imagem do boi"
        data="02/03/2026"
        dataFormatada=" 02 de Março de 2026"
      />
      <Sidebar 
      subtitulo="Posts relacionados"

      posts={posts}/>
      <Footer
        texto1="&copy; 2026 - O Bezerro de Ouro - Feito por Eduardo de Carvalho Fernandez"
        texto2="&copy; Todos os direitos reservados."

      />
    </>

  );
}
