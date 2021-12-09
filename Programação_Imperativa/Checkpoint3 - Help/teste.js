function Aluno(nomeParam, qtdFaltasParam, notasParam){
    this.nome = nomeParam;
    this.qtdFaltas = qtdFaltasParam;
    this.notas = notasParam;
    this.calculaMedia = function () {
        let media = 0;
        for (let i = 0; i < this.notas.length; i++){
            console.log(i);
        }
    }
}

const aluno1 = new Aluno("Mari", 3, [7, 8, 9])

aluno1.calculaMedia()
