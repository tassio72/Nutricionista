var campoFiltro = document.querySelector("#filtrar-tabela"); //selecionando o input de filtro

campoFiltro.addEventListener("input", function(){
    console.log(this.value); //o valor que está escrito no input pode ser selecionado por this, umas vez que este está dentro de campoFiltro
    var pacientes = document.querySelectorAll(".paciente"); //selecionando cada paciente 

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]; 
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //expressão regular. Função que busca um grupo de caracteres em uma String

            if (!expressao.test(nome)) { //método test da Regex serve para fazer filtros mesmo sem o usuário ter digitado todo o texto.
                paciente.classList.add("invisivel"); 
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});