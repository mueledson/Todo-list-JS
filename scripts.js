const button = document.querySelector('.Button-Add-Task');
const input = document.querySelector('.Input-Add-Task');
const listaCompleta = document.querySelector('.list-tasks')

let minhaListadeItens = [];

function adicionarNovaTarefa() {
    minhaListadeItens.push(input.value)

    input.value = ''
    
    mostrarTarefas()
}

function mostrarTarefas() {
    
    let novaLi = ``

    //

    minhaListadeItens.forEach((tarefa) =>{
        novaLi = novaLi + `

        <li class="task">
            <i 
                class="fa-regular
                fa-circle-check" 
                onClick="teste()"
            >
            </i>
            <p>${tarefa}</p>
            <i
            class="fa-solid fa-trash"
            onClick="deletarItem()"
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

function deletarItem() {
    console.log("Bannido")
}

button.addEventListener('click', adicionarNovaTarefa);