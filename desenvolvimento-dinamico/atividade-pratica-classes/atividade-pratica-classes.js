class Funcionario {
    constructor(nome, idade, cargo) {
        this._nome = nome;
        this._idade = idade;
        this._cargo = cargo;
    }

    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }

    get idade() {
        return this._idade;
    }
    set idade(idade) {
        if(idade>0){
            this._idade = idade;
        } else {
            alert("A idade deve ser positiva");
        }
    
    }

    get cargo() {
        return this._cargo;
    }
    set cargo(cargo) {
        this._cargo = cargo;
    }

    seApresentar() {
        console.log(`Nome: ${this._nome}, Idade: ${this._idade}, Cargo: ${this._cargo}`);
    }

    trabalhar() {
        console.log('trabalhando');
    }

}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }

    gerenciar() {
        console.log(`Gerenciando o departamento: ${this._departamento}`);
    }
}

class Desenvolvedor extends Funcionario {

    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this._linguagem = linguagem;
    }
    get linguagem() {
        return this._linguagem;
    }
    set linguagem(linguagem) {
        this._linguagem = linguagem;
    }

    programar() {
        console.log(`Programando em: ${this._linguagem}`);
    }
}


const gerente = new Gerente("Carla", 31, "Gerente", "Setor de Atendimento e Suporte");
gerente.seApresentar(); 
gerente.trabalhar(); 
gerente.gerenciar(); 


const desenvolvedor = new Desenvolvedor("Jonas", 23, "Desenvolvedor", "PHP");
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar(); 





