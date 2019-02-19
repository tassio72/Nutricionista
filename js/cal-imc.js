

var pacientes = document.querySelectorAll(".paciente"); //intanciando a Array paciente


for (var contador = 0;contador < pacientes.length; contador++) {
	
	var paciente = pacientes[contador]; //passando a posição da array

	var tdPeso = paciente.querySelector(".info-peso").textContent; //pegando o valor do peso
	var tdAltura = paciente.querySelector(".info-altura").textContent; //pegando o valor da altuea

	var pesoEhValido = validaPeso(tdPeso); //variável controle
	var alturaEhValida = validaAltura(tdAltura); //variável controle

	if (!pesoEhValido) {
	    pesoEhValido = false;
	    paciente.querySelector(".info-imc").textContent = "Peso inválido!";
	    paciente.classList.add("paciente-invalido");  //adicionando para essa classe e deixando visual o erro
	}

	if (!alturaEhValida){ 
	    alturaEhValida = false;
	    paciente.querySelector(".info-imc").textContent = "Altura inválida!";
	    paciente.classList.add("paciente-invalido");  //adicionando para essa classe e deixando visual o erro
	}

	if (alturaEhValida && pesoEhValido){
		paciente.querySelector(".info-imc").textContent = calculaImc(tdPeso, tdAltura); // calculando imc
	}

}

function validaPeso(peso){

    if (peso >= 1 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0.10 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }


