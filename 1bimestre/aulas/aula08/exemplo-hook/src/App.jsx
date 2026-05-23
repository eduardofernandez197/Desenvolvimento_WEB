import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

export default function App() {

 
  const [nomeProduto, setNomeProduto] = useState("");
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "teclado Gamer - Logitech", valor: 200 },
    { id: 2, nome: "Memoria ram - Corsair", valor: 2000 },
  ]);

 
  function criarProduto() {
    const produto = {
      id: produtos.length + 1,
      nome: nomeProduto,
      valor: 47.47,
    };

    setProdutos([...produtos, produto]);
    setNomeProduto("");
  }


  return (
    <main id="container">
      
     
      <h1>Carrinho</h1>

      <div>
        {produtos.map((produto) => (

                 <span key={produto.id}>
            <p>Nome: {produto.nome}</p>
            <p>Valor: {produto.valor}</p>
          </span>

        ))}
      </div>

      <h3>Adicionar Produto</h3>
      <input
        type="text"
        value={nomeProduto}
        onChange={(e) => setNomeProduto(e.target.value)}
      />
      <Button texto="Adicionar" funcao={criarProduto} />
    </main>
  );
}
