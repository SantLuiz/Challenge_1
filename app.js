//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

let lista = document.getElementById("listaAmigos")
let campo = document.getElementById("resultado")

function sortearAmigo(){
    campo.innerHTML = ""
    if (amigos.length>0){
        let numero = parseInt(Math.random()*amigos.length)
        let texto = `O AMIGO SORTEADO FOI: ${amigos[numero]}`
        campo.innerHTML = texto
        lista.innerHTML = ""
        amigos = []
    }else{
        alert("ADICIONE NOMES A LISTA!")
    }
}

function adicionarAmigo(){

    campo.innerHTML = " "

    let input = document.getElementById("amigo") 

    let amigo = input.value.trim()

    if (amigo) {
        amigos.push(amigo)
        input.value = ""
        input.placeholder = "Digite um nome"
        atualizarLista()
    }
    else{
        alert("ESCREVA UM NOME!")
    }   

}

function atualizarLista() {
    
    lista.innerHTML = ""

    for (let i of amigos) {
        let item = document.createElement("li")
        item.textContent = i
        lista.appendChild(item)
    }

}