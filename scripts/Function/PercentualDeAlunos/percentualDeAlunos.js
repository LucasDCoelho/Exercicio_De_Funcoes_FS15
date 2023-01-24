"use strict";
const alunos = document.getElementById('alunos');
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
