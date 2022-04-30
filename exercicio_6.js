// Questão 6) Refaça o exercício 5 usando a construção async/await

const readlineSync = require('readline-sync');

const axios = require ("axios");

const dotenv = require ("dotenv");
dotenv.config();

const getTemperature = async (latitude, longitude) => {
    return (await axios.get(process.env.WEATHER_API, {
        "params": {
            "lat": latitude,
            "lon": longitude,
            "units": process.env.UNITS,
            "appid": process.env.APP_KEY,
        }
    })).data.main.temp || "Erro"
}

const executar = async () => {
    let input
    input = readlineSync.question("Selecione uma das opcoes a seguir:\n 1- Digitar latitude e longitude\n 2- Sair\n")
    switch(input){
        case("1"):
            let latitude = readlineSync.question("\nInsira a latitude: \n")
            let longitude = readlineSync.question("\nInsira a longitude: \n")
            let temperatura = await getTemperature(latitude, longitude)
            console.log(`\nA temperatura no local atualmente é: ${temperatura}ºC\n`)
            executar();
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