/* Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original.
Por exemplo:
join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau". */

let juntar = ["O", "l", "a"]
let juntar2 = ["t","c","h","a","u"]



function join(oi){

let letra = oi.length
let inverso = ""

for(i=0;i<letra;i++){

inverso = inverso + oi[i]

}
return inverso
}

//console.log(join(juntar))




let i = 1

/* for(i=1;i<=10;i++){
console.log(num1)    
} */




while(i <= 10){
if(i%2 == 1){
//impar
console.log("O Número " + i + " é impar")
}else{
//par
console.log("O Número " + i + " é par")
}
i++
}


