
let pessoa = prompt("Qual é o seu nome?");

let numero1 = prompt(`${pessoa},  digite o primeiro número: `);

let numero2 = prompt(`${pessoa},  digite o segundo número: `);

numero1 = Number(numero1);
numero2 = Number(numero2);



const soma = numero1 + numero2;
alert(`${pessoa}, a soma dos números é:  ${soma}`);
const subtrair = numero1 - numero2;
alert(`${pessoa}, a subtração dos números é:  ${subtrair}`);
const multiplicar = numero1 * numero2;
alert(`${pessoa}, a multiplicação dos números é: ${multiplicar}`);
const dividir = numero1 / numero2;

alert(`${pessoa}, a divisão dos números é: ${dividir}`);
const sobra = numero1 % numero2;

alert(`${pessoa},  a sobra dos números é: ${sobra}`);

const ehNumeroPar =  soma % 2 === 0;
if(ehNumeroPar === true) {
 
  alert(`${pessoa},  a soma dos números é par.`)
} else {
  alert(`${pessoa},  a soma dos números é ímpar.`)
}

const numerosIguais = numero1 === numero2;
if(numerosIguais === true) {
  alert(`${pessoa},  os dois números digitados são iguais.`)
} else {
  alert(`${pessoa},  os dois números digitados são diferentes.`)
}



