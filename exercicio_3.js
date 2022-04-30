// Questão 3) Crie um objeto JSON que abriga todas as operações do exercício 2.

let calculadora = {

    soma: (a, b) => a + b,
    
    subtracao: (a , b) => a - b,

    multiplicacao: (a, b) => a * b,

    divisao: (a, b) => {

        if(b === 0){
            
            return "Divisão por 0...";

        }

        else{
            
            return a / b;

        }
    }   

}

console.log(`Resultado da soma: ${calculadora.soma(1, 2)}`);
console.log(`Resultado da subtração: ${calculadora.subtracao(5, 3)}`);
console.log(`Resultado da multiplicação: ${calculadora.multiplicacao(2, 2)}`);
console.log(`Resultado da divisão: ${calculadora.divisao(10, 2)}`);
console.log(`Resultado da divisão por zero: ${calculadora.divisao(10, 0)}`);