const button = document.querySelector('.Button-Add-Task');
const input = document.querySelector('.Input-Add-Task');
const listaCompleta = document.querySelector('.list-tasks')

let minhaListadeItens = [];

function adicionarNovaTarefa() {
    minhaListadeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''
    
    mostrarTarefas()
}
function mostrarTarefas() {
    
    let novaLi = ``

    //

    minhaListadeItens.forEach((item, index) =>{
        novaLi = novaLi + `

        <li class="task ${item.concluida && "done"}">
            <i 
                class="fa-regular fa-circle-check" 
                onClick="concluirTarefa(${index})"
            >
            </i>
            <p>${item.tarefa}</p>
            <i
            class="fa-solid fa-trash"
            onClick="deletarItem(${index})"
            >
            </i>
        </li>
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('listaTarefas', JSON.stringify(minhaListadeItens))

}
function concluirTarefa(index) {
    minhaListadeItens[index].concluida = !minhaListadeItens[index].concluida

    mostrarTarefas()
}
function deletarItem(index) {
    minhaListadeItens.splice(index, 1)

    mostrarTarefas()
}
function recuperarDados(params) {
    const tarefasLocalStorage = localStorage.getItem('listaTarefas')

    if (tarefasLocalStorage) {
        minhaListadeItens = JSON.parse(tarefasLocalStorage)
    }
    
    mostrarTarefas()
}

recuperarDados()
button.addEventListener('click', adicionarNovaTarefa);