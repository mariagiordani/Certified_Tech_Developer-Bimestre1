//1º Crie um objeto aluno
function Aluno(nomeParam, qtFaltasParam, notasParam){
    this.nome = nomeParam
    this.qtFaltas = qtFaltasParam
    this.notas = notasParam
    this.calcularMedia = function (){
        let media = 0
        for (let i = 0; i < this.notas.length  ; i ++){
            media = media + this.notas[i]
        }   
            media = media / this.notas.length
            return media.toFixed(2)
    }
    this.faltas = function (){
        return this.qtFaltas + 1
    }
}// Construtor Aluno

const aluno1 = new Aluno("João", 3, [7, 8, 9, 12, 4, 7])
const aluno2 = new Aluno("Gustavo", 5, [10, 3, 6])
const aluno3 = new Aluno("Mari", 7, [1, 2, 3, 4, 5, 10, 11])
const aluno4 = new Aluno("Osmar", 9, [1, 2, 3, 4, 5, 10, 11, 1, 2, 3, 4, 5, 10, 11])
const aluno5 = new Aluno("Everton", 9, [1, 2, 3, 4, 5, 10, 11, 1, 2, 3, 4, 5, 10, 11])

//Passo 3
function Curso(nomeDoCursoParam, notaDeAprovacaoParam, faltasMaximasParam, listaDeEstudantesParam){
    this.nomeCurso = nomeDoCursoParam
    this.notaDeAprovacao = notaDeAprovacaoParam
    this.faltasMaximas = faltasMaximasParam
    this.listaDeEstudantes = listaDeEstudantesParam
    //passo 4
    this.adicionarAluno = function(alunoNovo){
        this.listaDeEstudantes.push(alunoNovo)
    }
    //passo 5
    this.aprovarAluno = function(alunoAvaliado){
        let aprovado = false
        if(alunoAvaliado.calcularMedia() >= this.notaDeAprovacao && alunoAvaliado.qtFaltas < this.faltasMaximas){
        aprovado = true
        }else if(alunoAvaliado.calcularMedia() >= (this.notaDeAprovacao +(this.notaDeAprovacao*0.1))){

        }else{

        }
    }  
}


const FrontEnd = new Curso("Front-End", 7, 3, [aluno1, aluno2, aluno3])
//console.log(FrontEnd.listaDeEstudantes)
FrontEnd.adicionarAluno(aluno4)












