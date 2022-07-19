class Aluno {

    constructor(notas) {
        this.notas = notas
    }

    calcularMedia = () => {
        let soma = 0;
        for( let c = 0; c < this.notas.length; c++) {
            soma += this.notas[c];
    }

    let media = soma / this.notas.length;

    return media;

    }

    aprovacao = () => {

        let media = this.calcularMedia(); // escopo da função
    
        let condicao = media >= 8 ? "aprovado" : "reprovado";
    
        return 'Média: ' + media + ' - Resultado: ' + condicao;
    
    }
}

const notas = [8,7,8]
const Joao = new Aluno(notas)
console.log(Joao.calcularMedia())
console.log(Joao.aprovacao())




// Função Recursivas



class Contador{
    constructor(){}

    contagemRegressiva = (numero) => {
        console.log(numero);  
    
         let proximoNumero = numero - 1;

        if(proximoNumero > 0)
            this.contagemRegressiva(proximoNumero);
    }
}


const alguem = new Contador()
alguem.contagemRegressiva(10)