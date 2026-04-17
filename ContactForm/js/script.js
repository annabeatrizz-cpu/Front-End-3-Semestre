async function cadastrarContato(objetoContato){
    console.log(objetoContato);

    let resposta = await fetch("http://localhost:3000/contatos", {
     
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers : {
            "Content-Type" : "application/json; charset=UFT-8"
        }
    });
}



function validarFormulario() {
    let nome = document.getElementById("nome").value.trim();
    let sobrenome = document.getElementById("sobrenome").value.trim();
    // let email = document.getElementById("email").value.trim();
    // let ddd = document.getElementById("ddd").value.trim();
    // let telefone = document.getElementById("telefone").value.trim();
    // let cep = document.getElementById("cep").value.trim();
    // let RuaLaDeCasa = document.getElementById("RuaLaDeCasa").value.trim();
    // let ex = document.getElementById("ex").value.trim();
    // let AptoXblocoX = document.getElementById("AptoXblocoX").value.trim();
    // let Bairro = document.getElementById("Bairro").value.trim();
    // let Cidade = document.getElementById("Cidade").value.trim();
    // let Estado = document.getElementById("Estado").value.trim();
    // let Anotações = document.getElementById("Anotações").value.trim();

    let quantidadeErros = 0;

    if (nome.length == 0) {
        formError("nome");
        quantidadeErros++;

    } else {
        reiniciaBorda("nome");
    }

    if (sobrenome.length == 0) {
        formError("sobrenome");
        quantidadeErros++;
    } else {
        reiniciaBorda("sobrenome");
    }

    let objetoContato = {
        nome : nome,
        sobrenome: sobrenome
    };

    let cadastrado = cadastrarContato(objetoContato);
    return false;


    // if (email.length == 0) {
    //     formError("email");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("email");
    // }


    // if (numero.length == 0) {
    //     formError("numero");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("numero");
    // }



    // if (ddd.length == 0) {
    //     formError("ddd");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("ddd");
    // }




    // if (telefone.length == 0) {
    //     formError("telefone");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("telefone");
    // }


    // if (cep.length == 0) {
    //     formError("cep");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("cep");
    // }



    // if (RuaLaDeCasa.length == 0) {
    //     formError("RuaLaDeCasa");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("RuaLaDeCasa");
    // }


    // if (ex.length == 0) {
    //     formError("ex");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("ex");
    // }


    // if (AptoXblocoX.length == 0) {
    //     formError("AptoXblocoX");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("AptoXblocoX");
    // }



    // if (Bairro.length == 0) {
    //     formError("Bairro");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("Bairro");
    // }



    // if (Cidade.length == 0) {
    //     formError("Cidade");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("Cidade");
    // }



    // if (Estado.length == 0) {
    //     formError("Estado");
    //     quantidadeErros++;

    // } else {
    //     reiniciaBorda("Estado");
    // }



    // if (Anotações.length == 0) {
    //     formError("Anotações");
    //     quantidadeErros++;



    // } else {
    //     reiniciaBorda("Anotações");
    // }


    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " campo(s) obrigatorio(s) nao preenchido(s).");
        quantidadeErros = 0;
    }


}//fim da funcao
function formError(fildId) {
    document.getElementById(fildId).style.border = "1px solid red"
}

function reiniciaBorda(fildId) {
    document.getElementById(fildId).style.border = "none"
}

async function buscarEndereco(cep) {

    if (cep.trim().length < 8) {
        alert("CEP invalido. O CEP deve conter 8 digitos!");
    }

    try {
        
        aguardandoCampos();

        let retorno = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();
        console.log(dados)

        document.getElementById("RuaLaDeCasa").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.Bairro;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("Estado").value = dados.uf;

    } catch {
        alert("Erro ao procurar Endereco! ");
    }


}

function aguardandoCampos(){
   document.getElementById("RuaLaDeCasa").value = "Aguardando..."
   document.getElementById("Bairro").value = "Aguardando..."
   document.getElementById("Cidade").value = "Aguardando..."
   document.getElementById("Estado").value = "Aguardando..."

}
// console.log(`
// Aluno: ${nome} ${sobrenome} |
// Email: ${email} |
// `);