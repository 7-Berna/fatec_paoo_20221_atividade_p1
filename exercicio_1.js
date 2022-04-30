// Questão 1) Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
// receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
// operação. Faça a implementação usando a palavra function para todas elas.

function soma(a, b){

    return a + b;
}

function subtracao(a, b){

    return a - b;

}

function multiplicacao(a, b){

    return a * b;

}

function divisao(a, b){

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
console.log("Resultado da divisão por zero: " + divisao(10, 0));

