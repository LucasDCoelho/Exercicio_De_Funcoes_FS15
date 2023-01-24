const userId = document.getElementById('user') as HTMLDivElement;
const userAgeId = document.getElementById('user_age') as HTMLDivElement;


let nome = prompt("Digite seu nome?" as string) as string;
let ano = prompt(`${nome} em que ano você nasceu?`)

function welcome() {
  userId.innerHTML = `Seja bem-vindo ${nome}`;
}

function welcomeWithAge(age: number) {
  age = 2023 - (Number(ano))
  userAgeId.innerHTML = `Prazer :3 ${nome}. Sua idade é de ${age - 1} anos`;
}