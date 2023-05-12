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

}

function teste(){
    console.log('oi estou testando...')
}

function concluirTarefa(index) {
    minhaListadeItens[index].concluida = !minhaListadeItens[index].concluida

    mostrarTarefas()
}

function deletarItem(index) {
    minhaListadeItens.splice(index, 1)

    mostrarTarefas()
}

button.addEventListener('click', adicionarNovaTarefa);