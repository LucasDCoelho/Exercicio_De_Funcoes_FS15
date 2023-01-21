"use strict";


const pushOfBody = document.getElementById('user');
let nome = prompt("Qual seu nome??");
let age = {
    age: prompt("Qual sua Idade?")

}

function welcome(){
    pushOfBody.innerHTML = `Seja bem vindo ${nome}`
}

function age(age){
    pushOfBody.innerHTML = `Seja bem vindo ${nome}. E sua idade é ${age}`
}

welcome();