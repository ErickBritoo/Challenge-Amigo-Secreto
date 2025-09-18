var friends = [];

const addButton = document.querySelector(".button-add");
var htmlFriendsList = document.querySelector("#listaAmigos");

function adicionarAmigo() {
    let input = document.querySelector("input#amigo");
    let name = input.value.trim()

    if (validarNome(name)) {
        friends.push(name);
        adicionarFriendHTML(name)
    } else {
        alert("Por favor, insira um nome.");
    }

    input.value = null;

    console.log(friends);
}

function adicionarFriendHTML(name) {
    var element = document.createElement("li")
    element.textContent = name;

    htmlFriendsList.appendChild(element);
}


let validarNome = (name) => !(name === null || name === "");

function sortearAmigo() {
    if (friends.length == 0) {
        alert("[ERRO] Adicione amigos para realizar um sorteio!!!!");
        return;
    }

    let indice = Math.floor(Math.random() * friends.length);
    alert("Amigo sorteado: " + friends[indice]);
}