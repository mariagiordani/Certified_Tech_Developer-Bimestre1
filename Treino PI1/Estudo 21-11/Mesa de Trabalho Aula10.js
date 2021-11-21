let array1 = [1, 2, 3, 4, 5, 10, 2]
let array2 = ["o", "l", "á"]



function imprimirInverso(arrayQualquer){
    let a = arrayQualquer.length - 1 

    for(i=a;i>=0;i--){
       console.log(arrayQualquer[i])
    }
}


function inverter(arrayQualquer){
    let b = arrayQualquer.length - 1
    let arrayInvertido = []

        for(i=b;i>=0;i--){
            arrayInvertido.push(arrayQualquer[i])
        }
            return console.log(arrayInvertido)
}


//Somar Array
function somarArray(arrayQualquer){
    let c = arrayQualquer.length
    let arraySomado = 0
    let i = 0

    while(i<c){
        arraySomado += arrayQualquer[i]
        i++
    }

    console.log(arraySomado)
}

function concatenarArray(arrayQualquer){
    let d = arrayQualquer.length
    let concatenar = ""

    for(i=0;i<d;i++){
        concatenar += arrayQualquer[i]
    }

    return console.log(concatenar)
}




let array3 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã", "a vida é bela"]
let array4 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

function maiusculo(x){
    let e = x.length

    for(i=0;i<e;i++){
        x[i] = x[i].toUpperCase()
    }
    return console.log(x)
}

function juntarArrays(arrayQualquer1, arrayQualquer2){
    let f = arrayQualquer2.length
    let arrayFinal = arrayQualquer1

    for(i=0;i<f;i++){
    arrayFinal.push(arrayQualquer2[i])
    }
   // let infiltrado = arrayFinal[f-1]
    arrayFinal.pop()
    return console.log(arrayFinal);

}

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararArray(arrayQualquer1, arrayQualquer2){
    let g = arrayQualquer2.length

    for(i=0;i<g;i++){
        if(arrayQualquer1[i] == arrayQualquer2[i]){
            //Caso sejam iguais
            console.log("As classificações da rodada " + (i + 1) + " são iguais!");
        }else{
            console.log("As classificações da rodada " + (i + 1) + " são diferentes");
            //Caso sejam diferentes
        }
    }
}

compararArray(asiaScores, euroScores)







