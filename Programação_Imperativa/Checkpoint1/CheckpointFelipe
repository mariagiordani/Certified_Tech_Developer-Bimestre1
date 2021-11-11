function microondas(comida, tempoMicro=0){
    let feito='Prato pronto'
    let ehTempoValido = (tempoMicro>=0)?true:false
    let tempoInvalido = "Insira um tempo válido"
    console.log(comida)
    comida = comida.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    comida = comida.toLowerCase()
    console.log(comida)
    tempo = (comida == 'pipoca') ? 10
            : (comida == 'macarrao') ? 8
            : (comida == 'carne') ? 15
            : (comida == 'feijao')? 12
            : (comida == 'brigadeiro') ? 8
            : 'prato inexistente'
    
    if(ehTempoValido){
        mostrador = (tempoMicro >=0 && tempoMicro <tempo ) ? "Tempo insuficiente. " + feito
                : (tempoMicro >= tempo && tempoMicro < 2*tempo) ? feito
                : (tempoMicro >= 2*tempo && tempoMicro< 3*tempo) ? "Comida queimou. " + feito
                : (tempoMicro >= 3*tempo) ? "Kabumm"
                : tempoInvalido
    } else{
        mostrador = tempoInvalido
    }
    
    return(console.log(mostrador))
}

microondas("piPócã", 11)


