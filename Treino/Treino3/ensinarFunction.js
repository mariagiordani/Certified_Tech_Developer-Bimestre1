function converterAnosEmDias(){
    let ano = 10
    let dia = ano * 365
    return dia
}
 //   console.log(converterAnosEmDias())






function calcularValorDaHora(salario, horasTrabalhas, diasTrabalhados){
let valorDaHora = salario / (horasTrabalhas * diasTrabalhados)
return valorDaHora.toFixed(2)
}

 console.log(calcularValorDaHora(5200, 8, 22))