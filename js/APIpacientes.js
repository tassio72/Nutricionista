var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () { //evento listener com evento click
	
	var xhr = new XMLHttpRequest(); //objeto que faz requisições HTTP

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //pedindo para o JS colocar obter o endereço

	xhr.addEventListener("load",function(){ //load event carrega e mostra a pagina com as informações do endereço informado
		var erroAjax =document.querySelector("#OnErroAjax"); 	
		if (xhr.status == 200) { //status = 200 siginifica que não deu erro
			erroAjax.classList.add("invisivel");
		 	var respostaDaAPI = xhr.responseText;  //os dados vem de uma JSON
			var pacientesDaAPI = JSON.parse(respostaDaAPI); //pega os dados do JSON e converter dados para um objeto JS. No caso, ele converte (parse) em array
		
			pacientesDaAPI.forEach (function(paciente) { //pegando dados importados e colocando na tabela
				adicionaPacienteNaTabela(paciente);
			})
		} else{
			erroAjax.classList.remove("invisivel");
		}	

	})
	xhr.send(); //para enviar as informações da API para a pagina


})


