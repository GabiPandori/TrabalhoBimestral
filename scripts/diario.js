const listaPostagens = document.querySelector("#lista-postagens");
const formPostagem = document.querySelector("#form-postagem");
const campoTexto = document.querySelector("#nova-postagem");

let postagens = JSON.parse(localStorage.getItem("postagens")) || [];

function renderizarPostagens() {
    listaPostagens.innerHTML = ""; 

    postagens.forEach((texto, index) => {
        const li = document.createElement("li");
        li.textContent = texto;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "🗑️";
        botaoRemover.classList.add("remover-postagem");
        botaoRemover.addEventListener("click", () => {
            removerPostagem(index);
        });

        li.appendChild(botaoRemover);
        listaPostagens.appendChild(li);
    });
}

formPostagem.addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = campoTexto.value.trim();
    if (texto === "") {
        alert("Digite algo antes de postar.");
        return;
    }

    postagens.push(texto); 
    campoTexto.value = "";
    salvarPostagens();
    renderizarPostagens();
});

function removerPostagem(index) {
    postagens.splice(index, 1); 
    salvarPostagens();
    renderizarPostagens();
}
function salvarPostagens() {
    localStorage.setItem("postagens", JSON.stringify(postagens));
}
renderizarPostagens();
