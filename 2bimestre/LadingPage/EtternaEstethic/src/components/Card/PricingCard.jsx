import Check from "../../assets/check.svg";
import Button from "../Button";

export default function PricingCard(props) {
  return (
    <div
      className={`pricing-card${props.premium ? " premium" : ""}${props.compact ? " compact" : ""}`}
    >
      {props.bonus && (
        <span className="bonus">
          <p>{props.bonus}</p>
        </span>
      )}

      <span className="plan">
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
      </span>

      {props.periodo ? (
        <span className="price">
          <h2>{props.preco}</h2>
          <p>{props.periodo}</p>
        </span>
      ) : (
        <h2>{props.preco}</h2>
      )}

      <Button text="Pedir agora" secondary={props.secondary} />
      <span className="hr" />

      {props.beneficioUm && (
        <span className="features">
          <img src={Check} alt="ícone check" width={24} height={24} />
          <p>{props.beneficioUm}</p>
        </span>
      )}

      {props.beneficioDois && props.beneficioDoisEmLista ? (
        <ul className="features">
          <li>
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>{props.beneficioDois}</p>
          </li>
        </ul>
      ) : props.beneficioDois ? (
        <span className="features">
          <img src={Check} alt="ícone check" width={24} height={24} />
          <p>{props.beneficioDois}</p>
        </span>
      ) : null}

      {props.beneficioTres && (
        <span className="features">
          <img src={Check} alt="ícone check" width={24} height={24} />
          <p>{props.beneficioTres}</p>
        </span>
      )}
    </div>
  );
}
