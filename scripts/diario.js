const div = document.getElementById("publicacoes");
const campoTexto = document.getElementById("texto");
const botao = document.getElementById("EnviarTerapeuta");

// Configurando o texto do botão
botao.innerHTML = "Enviar";

// Criando uma lista para exibir as postagens
const ul = document.createElement("ul");
div.appendChild(ul);

// Adicionando evento ao botão
botao.addEventListener("click", () => {
    const texto = campoTexto.value.trim(); // Captura o texto do campo de entrada
    if (texto === "") {
        alert("Digite algo antes de postar.");
        return;
    }

    // Criando um elemento para a postagem
    const postagem = document.createElement("li");
    postagem.textContent = texto;

    // Criando botão de remover postagem
    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "🗑️";
    botaoRemover.classList.add("remover-postagem");
    botaoRemover.addEventListener("click", () => {
        ul.removeChild(postagem); // Remove a postagem da lista
    });

    // Adicionando o botão de remover à postagem
    postagem.appendChild(botaoRemover);

    // Adicionando a postagem à lista
    ul.appendChild(postagem);

    // Limpando o campo de texto
    campoTexto.value = "";
});