// Questão 4) Escreva um script que apresenta as seguintes operações para o usuário:
//     1- Soma
//     2- Subtração
//     3- Multiplicação
//     4- Divisão
//     5- Sair
// O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
// inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
// o objeto JSON do exercício 4 para realizar as operações aritméticas.

const readlineSync = require('readline-sync');

let calculadora = {
    "soma": (a, b) => a + b,
   
    "subtracao": (a, b) => a - b,
    
    "multiplicacao": (a, b) => a * b,
    
    "divisao": (a, b) => {
        if(b === 0){
            return "Divisão por 0...";
        }
        else{
            return a / b;
        }
    },
}

var op;

do {
    op = readlineSync.question('Selecione uma operacao:\n 1- Soma\n 2- Subtracao\n 3- Multiplicacao\n 4- Divisao\n 5- Sair\n\n');
    switch (op) {
        case "1":
            const a = parseInt(readlineSync.question("\nInsira o primeiro numero: \n"));
            const b = parseInt(readlineSync.question("\nInsira o segundo numero: \n"));
            console.log(`\nResultado da soma: ${calculadora.soma(a, b)}\n`);
            break;

        case "2":
            const c = parseInt(readlineSync.question("\nInsira o primeiro numero: \n"));
            const d = parseInt(readlineSync.question("\nInsira o segundo numero: \n"));
            console.log(`\nResultado da subtração: ${calculadora.subtracao(c, d)}\n`);
            break;

        case "3":
            const e = parseInt(readlineSync.question("\nInsira o primeiro numero: \n"));
            const f = parseInt(readlineSync.question("\nInsira o segundo numero: \n"));
            console.log(`\nResultado da multiplicação: ${calculadora.multiplicacao(e, f)}\n`);
            break;

        case "4":
            const g = parseInt(readlineSync.question("\nInsira o primeiro numero: \n"));
            const h = parseInt(readlineSync.question("\nInsira o segundo numero: \n"));
            console.log(`\nResultado da divisão: ${calculadora.divisao(g, h)}\n`);
            break;

        case "5":
            console.log(`\nFinalizando o programa...\n`)
            break;

        default:
            console.log(`\nPor favor, digite uma opção entre 1 e 5 \n`);
    }

} while (op != 5)
