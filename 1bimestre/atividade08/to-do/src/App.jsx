import { useState } from "react";
import "./App.css";

export default function App() {
  const [listaTarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if (input === "") {
      alert("Digite uma tarefa");
      return;
    }
    const tarefas = {
      id: Date.now(),
      nome: input,
    };
    setTarefas([...listaTarefas, tarefas]);
    setInput("");
  }

  return (
    <main id="container">
      <h1>Lista de tarefas</h1>
      <input
        placeholder="Digite aqui sua tarefa"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            adicionarTarefa();
          }
        }}
      />

      <ul>
        {listaTarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.nome}
            <button
              id="remover"
              onClick={() =>
                setTarefas(
                  listaTarefas.filter((lista) => lista.id !== tarefa.id),
                )
              }
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button id="add" onClick={adicionarTarefa}>
        Adicionar tarefa
      </button>
    </main>
  );
}
