var bebida = prompt("Escolha uma bebida (café, leite, chá)").toLowerCase();
var valor;

switch (bebida) {
    case "café":
        valor = 5.00;
        console.log("Café");
        break;
    case "leite":
        valor = 5.99;
        console.log("Leite");
        break;
    case "chá":
        valor = 7.99;
        console.log("Chá");
        break;
    default:
        console.log("Você deve escolher entre as opções: café, leite e chá");
        break;
}




