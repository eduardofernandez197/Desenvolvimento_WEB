import Star from "../../assets/star.svg";

type TestimonialCardProps = {
  imagemPerfil: string;
  testemunho: string;
  nome: string;
  cargo: string;
  quantidadeEstrelas: number;
};

export default function TestimonialCard(props: TestimonialCardProps) {
  const listaEstrelas = new Array(props.quantidadeEstrelas).fill(1);
  const listaEstrelasVazia = new Array(5 - props.quantidadeEstrelas).fill(1);

  return (
    <div className="carousel-card">
      <img src={props.imagemPerfil} alt="Imagem perfil cliente" />
      <span className="testimony">
        <p>{props.testemunho}</p>
      </span>
      <span className="rating">
        {listaEstrelas.map((item, indice) => (
          <img
            key={`estrela-${indice}`}
            src={Star}
            alt="Imagem estrela"
            width={22}
            height={22}
          />
        ))}
        {listaEstrelasVazia.map((item, indice) => (
          <img
            key={`estrela-vazia-${indice}`}
            src={Star}
            alt="Imagem estrela sem fundo"
            width={22}
            height={22}
          />
        ))}
      </span>
      <span className="names">
        <p>{props.nome}</p>
        <p>{props.cargo}</p>
      </span>
    </div>
  );
}
