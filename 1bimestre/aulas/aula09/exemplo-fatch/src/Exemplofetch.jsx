import { useEffect, useState } from "react";


export default function App() {
const [ativo, setAtivo] = useState(false);
const [valorBtc, setValorBtc] = useState();

useEffect(() => {
  fetch("https://economia.awesomeapi.com.br/json/last/btc")
  .then (response => response.json())
  .then(json => setValorBtc(json.BTCBRL.bid))
  .catch (error => console.log.error("Erro bolado", error))


  // https://economia.awesomeapi.com.br/json/last/btc
}, [ativo] )

  return (
   <main>
    <h1>exemplo useEffect fetch</h1>
    <p>O valor e {ativo ? "ativo" : "inativo"}</p>
    
    <p>valor atual BTC: {valorBtc && valorBtc}</p>
    <button onClick={() => setAtivo(!ativo)}>
      alterar valor 
      </button>
   </main>
  );
}