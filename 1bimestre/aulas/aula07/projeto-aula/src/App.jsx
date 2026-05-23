
import Button from "./components/button";
import Cabechalho from "./components/Cabecalho";

export default function App() {
  const nome = "Edaurdo Fernadnez";

  function teste() {
    console.log("Teste Function");
  }

  return (
    <main>
      <Cabechalho title="Cabecalho 1" />

      <h1 className="">Olá {nome}</h1>

      <Button funcao={teste}
       textoB utton="Clique aqui" />
    </main>
  );
}
