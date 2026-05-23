import "./Button.css";
export default function Button(props) {
  return (
    <button className="btn" onClick={props.funcao}>
      {props.texto}
    </button>
  );
}
