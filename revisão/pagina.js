function pagina(){

    const body = document.body;

    const div = document.createElement("div");
    div.classList.add("Container");

    const input = document.createElement("input");
    inpput.textContent = "Digite aqui!";
    input.classList.add('')

    const botao = document.getElementById("btnAdicionar");

    const lista = document.getElementById("listaTarefas");

    botao.addEventListener("click", ()=>{
        const novaTarefa = document.createElement("li"); // Linha de Base
        const texto = input.value.trim();
        
        if (texto === ""){
            alert("Digite algo!");
            return
        }
        novaTarefa.textContent = texto; // Linha de Base - adiciona texto ao elemento da lista
        novaTarefa.classList.add('destaque'); // Linha de Base - adiciona a classe "destaque" ao li.
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase); // adiciona atributo personalizado
        novaTarefa.style.color = "#333"; // muda a cor do texto
        
        lista.appendChild(novaTarefa); // adiciona elemento

        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo", tarefa);
            novaTarefa.classList.remove("destaque");
            novaTarefa.classList.add("removido");
            novaTarefa.innerHTML += " (removido)";
            setTimeout(()=>{lista.removeChild(novaTarefa);}, 1000)

            input.value = "";
        });
    });
}
