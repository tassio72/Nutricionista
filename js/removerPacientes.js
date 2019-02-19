


var tabela = document.querySelector("table"); //criando referencia da tabela
//sobre o AddEventListener:

//Para resolver o problema da remoção de pacientes, vamos nos aproveitar de uma característica do JavaScript chamada Event Bubbling, 
//ou "borbulhamento" de eventos. Quando escutamos um evento no JavaScript, ele na verdade não acontece só no dono do evento 
//(no nosso caso, na linha do paciente), ele acontece também no pai do paciente, no pai do pai do paciente, e assim vai subindo.

//portante, por questões de melhoria e rendimento do browser,
//colocamos o AddEventListener para escutar tudo que envolve o "pai" do filho que queremos alterar. Neste caso, 
//os pais das TRs que contém as infomações dos pacientes estão dentro de uma <table> "table"

tabela.addEventListener("dblclick",function(event){ //usando evento double click e a função event
	if (event.target.tagName == 'TD') { //tagName retorna o nome da tag selecionada em caps lock. Como queremos remover apenas as TD..
		event.target.parentNode.classList.add("fadeOut"); //Adicionando o Target a class FadeOut

		//função setTimeout pede para o JS dá um hold on. Sua estrutura pede a criação de uma função anonima
		//tudo que está dentro da função deve esperar o tempo estabelecido, em milesimos, no ultimo parametro da função
		setTimeout(function() {
		    
	        event.target.parentNode.remove();
		    	//target serve para sabermos qual região da table foi clicada. No caso da nossa table, sempre as TDs são selecionadas
		    	//parentNode serve para "acionarmos" o pai da target selecionada.
			

		}, 500); //500 milesimos de hold on antes do JS aplicar o que está dentro da função;
	}

});


//não exclui está opção apenas por motivos didáticos. Porque está opção não permite remover pacientes adicionados pelo usuário
//var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente) { 			//definindo uma função para selecionar cada paciente dentro da referência pacientes
//     paciente.addEventListener("dblclick", function() {		 //adicionado o evento que atribui a capaciadade do browser detectar duplo clique.
//         this.remove();										// o tipo de evento selecionado é determinado por "dblclick"
//     }); 		//como temos vários pacientes, o que for clicado é o "this", ou seja, que está sendo acionado neste momento pelo usuário
// });