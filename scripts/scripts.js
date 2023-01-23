"use strict";
const userId = document.getElementById('user');
const userAgeId = document.getElementById('user_age');
const alunos = document.getElementById('alunos');
// let nome = prompt("Digite seu nome?" as string) as string;
// let ano = prompt(`${nome} em que ano você nasceu?`)
// function welcome() {
//   userId.innerHTML = `Seja bem-vindo ${nome}`;
// }
// function welcomeWithAge(age: number) {
//   age = 2023 - (Number(ano))
//   userAgeId.innerHTML = `Prazer :3 ${nome}. Sua idade é de ${age - 1} anos`;
// }
// Retorna os que faltaram
let maxClassmates = 20;
let activeClassmates = 19;
let rainDay = true;
function percentualClassmates(alunosChuva) {
    let resultDosQueVieram = (alunosChuva * 100) / maxClassmates;
    let resultDosQueNaoVieram = 100 - resultDosQueVieram;
    return alunos.innerHTML = String(`${resultDosQueNaoVieram}% da turma faltou T....T`);
}
;
function media(teo, prat1, prat2) {
    teo = teo * 2;
    return (teo + prat1 + prat2) / 3;
}
let manha = new Date('0 05:00');
let tarde = new Date('0 12:00');
let noite = new Date('0 18:00');
let manhaEnd = new Date('0 11:59');
console.log(manhaEnd.getTime());
function parkTime(time) {
    if (time >= 5 && time <= 11.59) {
        console.log("Manhã");
    }
    else if (time >= 12 && time <= 17.59) {
        console.log("Tarde");
    }
    else if (time >= 18 && time <= 4.59) {
        console.log("Noite");
    }
}
console.log(Date.now());
