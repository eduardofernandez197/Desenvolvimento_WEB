
const campo = document.getElementById('campoTarefa');
const botao = document.getElementById('botaoAdicionar');
const lista = document.getElementById('listaDeTarefas');

function adicionarTarefa() {
    const texto = campo.value; 

    if (texto === "") {
        alert("Escreva algo antes de adicionar!");
        return;
    }
    const novoItem = document.createElement('li');
    novoItem.innerText = texto; 

    lista.appendChild(novoItem);

    campo.value = "";
}

botao.addEventListener('click', adicionarTarefa);

lista.addEventListener('click', function(evento) {
    
    const itemClicado = evento.target;
    
    itemClicado.remove();
});