// Questão 5) O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
// não é o mesmo utilizado em aula.
// https://openweathermap.org/current
// Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
// atual (atributo chamado  temp). O programa deve ser um loop que exibe as seguintes
// opções para o usuário:
// 1- Digitar latitude e longitude
// 2- Sair
// O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
// informar   os   valores   de   latitude   e   longitude   da   localização   da   qual   deseja   saber   a
// temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
// de ambiente que indica qual unidade de medida  de temperatura  deve ser utilizada:
// Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
// e de tomar o cuidado de não armazená-lo no sistema de controle de versão.

const readlineSync = require('readline-sync');

const axios = require ("axios");

const dotenv = require ("dotenv");
dotenv.config();

const getTemperature = (latitude, longitude) => {
    return axios.get(process.env.WEATHER_API, {
        "params": {
            "lat": latitude,
            "lon": longitude,
            "units": process.env.UNITS,
            "appid": process.env.APP_KEY,
        }
    })
}

const executar = () => {
    let input
    input = readlineSync.question("Selecione uma das opcoes a seguir:\n 1- Digitar latitude e longitude\n 2- Sair\n")
    switch(input){
        case("1"):
            let latitude = readlineSync.question("\nInsira a latitude: \n")
            let longitude = readlineSync.question("\nInsira a longitude: \n")
            getTemperature(latitude, longitude)
            .then((resultado) => {
                console.log(`\nA temperatura do local atualmente é: ${resultado.data.main.temp}ºC\n`);
                executar();
            })
            .catch((erro) => {
                console.log("\nErro na busca da temperatura\n");
                executar();
            })
            break;
        case("2"): 
            console.log("\nEncerrando o programa\n");
            break;
        default: 
            console.log("\nPor favor, selecione uma das opções disponíveis\n");
            executar();
            break;
    }
} 

executar();