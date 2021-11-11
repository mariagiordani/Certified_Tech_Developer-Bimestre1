function results(tempoPreparo, tempoUsuario) {
    if (tempoUsuario < tempoPreparo) {
        console.log("Tempo insuficiente");
    } else if (tempoUsuario > (tempoPreparo * 2) && (tempoUsuario <= (tempoPreparo * 3))) {
        console.log("A comida queimou :(");
    } else if (tempoUsuario >= ((tempoPreparo * 3) + 1)){
        console.log("Kabumm! Você explodiu o microondas :O");
    } else {
        console.log("Prato pronto, bom apetite!!!");            
    }    
}

function microondas(alimento, tempo) {
    switch (alimento){
        case "pipoca":
            return results(10, tempo);
            break;

        case "macarrão":
            return results(8, tempo);
            break;    

        case "carne":
            return results(15, tempo);
            break;       
            
        case "feijão":
            return results(12, tempo);
            break;     

        case "brigadeiro":
            return results(8, tempo);
            break;    
        default:
            console.log("Prato inexistente");    
            break;    
    }
}

let comida = "Pipoca".toLowerCase()
let tempoUsuario = 40

console.log("\n\t\tESCOLHA A OPÇÃO \n Pipoca | Macarrão | Carne | Feijão | Brigadeiro ")
console.log("\n\t\tINSIRA O TEMPO")
console.log(comida, tempoUsuario)

console.log("\n\t\tPREPARANDO")
console.log("\n\t\tPREPARANDO")
console.log("\n\t\tPREPARANDO")
console.log("\n\t\tPREPARANDO\n")


microondas(comida, tempoUsuario)