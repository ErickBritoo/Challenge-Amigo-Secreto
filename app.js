var friends = [];

const addButton = document.querySelector(".button-add");


function adicionarAmigo(){
    let name = document.querySelector("input#amigo").value.trim();

    friends.push(name);

    console.log(friends);
}