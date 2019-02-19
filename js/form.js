//Interagindo com Forms do HTML através de eventos

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){ //função para adicionar novos pacientes
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");//selecionando o form do HTML e instanciando-o
   
    var paciente = obtemPacienteDoFormulario(form); //coletando as informçaões preenchidas no form na pagina
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);//chamando função com objeto JS que tem atributos de um paciente

    form.reset(); //limpando form
    document.querySelector("#mensagem-erro").textContent = "";

});

//FUNÇÕES------------------------------------------------------------------------------------------------
function adicionaPacienteNaTabela(paciente) { //para adicionar paciente na tabela
    var pacienteTr = montaTr(paciente);//criando uma Tr
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); //Definindo pacienteTr como filho de tabela
}


function obtemPacienteDoFormulario(form) { 
//fução que cria um objeto do tipo paciente
    var paciente = { //criando um objeto do tipo paciente
        nome: form.nome.value, //atribuindo os valores preenchidos pelo usuário no form 
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }
    return paciente; //retornando o objeto para a referencia/variavel
}


function montaTr(paciente){ //cria tr , com os atributos do Objeto paciente
    var pacienteTr = document.createElement("tr"); //criando um elemento do tipo tr mundo HTML no JS
    pacienteTr.classList.add("paciente");

//chamando montaTd defini-las como filhas da Tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) { //criaa elemento td (HTML) com paciente.atributo, classe
    var td = document.createElement("td"); //criando um elemento do tipo td mundo HTML no JS
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

   
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    } 
        
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }

    if(paciente.nome.length == 0){
        erros.push("Nome não preenchido")
    }

    if (paciente.peso.length ==0){
        erros.push("Peso não preenchido");
    }

    if (paciente.altura.length ==0){
        erros.push("Altura não preenchida")
    }

    if (paciente.gordura.length ==0){
        erros.push("Gordura não preenchida")
    }
      
    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""; //função que edita uma tag HTML internamente
    erros.forEach(function(erroMensagem){
        var li = document.createElement("li");
        li.textContent = erroMensagem;
        ul.appendChild(li);
    });
}
