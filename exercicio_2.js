// Questão 2) Refaça o exercício 1 usando arrow functions.

var soma = (a, b) => {return a + b};

var subtracao = (a, b) =>  a - b;

var multiplicacao = (a, b) =>  a * b;

var divisao = (a, b) => {
    
    if(b === 0){
        return "Divisão por 0...";
    }

    else{
        return a / b;
    }
}

console.log("Resultado da soma: " + soma(1, 2));
console.log("Resultado da subtração: " + subtracao(5, 3));
console.log("Resultado da multiplicação: " + multiplicacao(2, 2));
console.log("Resultado da divisão: " + divisao(10, 2));
console.log("Resultado da divisão por zero : " + divisao(10, 0));
