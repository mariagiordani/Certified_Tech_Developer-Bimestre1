let alunos = require('./alunos');
//3º Criar objeto literal curso
function Curso(nomeDoCursoParam, notaDeAprovacaoParam, faltasMaximasParam){
    this.nomeDoCurso = nomeDoCursoParam
    this.notaDeAprovacao = notaDeAprovacaoParam
    this.faltasMaximas = faltasMaximasParam
    this.listaDeEstudantes = alunos.listaALunos
    //4º Criar método que permite adicionar alunos à lista do curso
    this.adicionarAluno = function(alunoNovo){
      return this.listaDeEstudantes.push(alunoNovo)
    }
    this.aprovarAluno = function(alunoAvaliado){
        let aprovado
        if(alunoAvaliado.calcularMedia() >= this.notaDeAprovacao && alunoAvaliado.qtFaltas < this.faltasMaximas){
            aprovado = true
            return aprovado
        }else if(alunoAvaliado.calcularMedia() >= (this.notaDeAprovacao + (this.notaDeAprovacao*0.1)) && alunoAvaliado.qtFaltas == this.faltasMaximas){
        aprovado = true
        return aprovado
        }else{
            aprovado = true
            return aprovado
        }
    }
    this.alunosAprovados = function(){
        //(ProgImperativa.listaDeEstudantes[1].nome)
        let listaAlunosAprovados = []
        for(i=0;i<this.listaDeEstudantes.length;i++){
        listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[i]))
        //console.log(i)
        }
            console.log(listaAlunosAprovados)
        
    }
    
}
let FrontEnd = new Curso("Front-End", 7, 7)
let ProgImperativa = new Curso("Programação Imperativa", 7, 2)

FrontEnd.alunosAprovados()











