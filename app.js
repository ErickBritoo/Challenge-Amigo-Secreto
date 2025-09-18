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
        alert("Insira um nome valido ");
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