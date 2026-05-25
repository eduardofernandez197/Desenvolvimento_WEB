type CardProps = {
  imagem: string;
  alt: string;
  titulo: string;
  texto: string;
};

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <span>
        <img src={props.imagem} alt={props.alt} width={64} height={64} />
      </span>
      <div>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
        <hr />
      </div>
    </div>
  );
}
