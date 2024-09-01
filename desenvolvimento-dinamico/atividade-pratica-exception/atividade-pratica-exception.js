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
        this._idade = idade;
    }

    get cargo() {
        return this._cargo;
    }
    set cargo(cargo) {
        this._cargo = cargo;
    }

    seApresentar() {
        return `Nome: ${this._nome}, Idade: ${this._idade}, Cargo: ${this._cargo}`;
    }

    trabalhar() {
        return `trabalhando`;
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
        return `Gerenciando o departamento: ${this._departamento}`;
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
        return `Programando em: ${this._linguagem}`;
    }
}


function exibirErro(mensagem) {
    const erro = document.getElementById("erro");
    erro.innerHTML = `<p> ${mensagem} </p>`;
}

document.getElementById("cadastrar-funcionario").addEventListener("click", () => {
    try {
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const cargo = document.getElementById("cargo").value;
        const departamento = document.getElementById("departamento").value;
        const linguagem = document.getElementById("linguagem").value;

        if(idade<=0){
            throw new Error("A idade deve ser positiva");
        }

        if (!nome || !idade || !cargo) {
            throw new Error("Deve preencher todos os campos");
        }


        let funcionario;

        if (cargo === "Gerente") {
            if (!departamento) {
                throw new Error("Pendente departamento para o Gerente.");
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === "Desenvolvedor") {
            if (!linguagem) {
                throw new Error("Pendente linguagem de programação para o Desenvolvedor.");
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            throw new Error("Cargo não reconhecido");
        }

        if (funcionario) {
            const resultado = document.getElementById("funcionarios");
            resultado.innerHTML = `
                <p>${funcionario.seApresentar()}</p>
                <p>${funcionario.trabalhar()}</p>
                
                <p>${cargo === "Gerente" ? funcionario.gerenciar() : funcionario.programar()}</p>
            `;
            document.getElementById("erro").innerHTML = "";
        }

    } catch (error) {
        exibirErro(error.message);
    }
})




