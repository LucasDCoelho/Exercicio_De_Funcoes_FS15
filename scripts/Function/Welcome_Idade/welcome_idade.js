"use strict";
const userId = document.getElementById('user');
const userAgeId = document.getElementById('user_age');
let nome = prompt("Digite seu nome?");
let ano = prompt(`${nome} em que ano você nasceu?`);
function welcome() {
    userId.innerHTML = `Seja bem-vindo ${nome}`;
}
function welcomeWithAge(age) {
    age = 2023 - (Number(ano));
    userAgeId.innerHTML = `Prazer :3 ${nome}. Sua idade é de ${age - 1} anos`;
}
