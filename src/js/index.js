//Passo 1 - Criar uma variavel no JS para trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//Passo 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        //Passo 3 - Remover a classe aberto só do cartão que está aberto
        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto")

        //Passo 4 - Ao clicar em um pokedev da listagem pegamos o id desse pokedev para saber qual cartao abrir
        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
        const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
        cartaoPokedevParaAbrir.classList.add("aberto");

        //Passo 5 - Remover a classe ativo que marca o pokedev selecionado na listagem
        const pokedevAtivoNaListagem = document.querySelector(".ativo");
        pokedevAtivoNaListagem.classList.remove("ativo");

        //Passo 6 - Adicionar a classe ativo no pokedev selecionado na listagem
        const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
        pokedevSelecionadoNaListagem.classList.add("ativo");
    })
})