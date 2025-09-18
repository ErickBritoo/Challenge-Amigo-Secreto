var friends = [];

const addButton = document.querySelector(".button-add");



function adicionarAmigo() {
    let input = document.querySelector("input#amigo");
    let name = input.value.trim()

    if (validarNome(name)) {
        friends.push(name);
    } else {
        alert("Insira um nome valido ");
    }
    input.value = null;
    console.log(friends);
}

let validarNome = (name) => !(name === null || name === "");