document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("#EnviarTerapeuta");
  const textarea = document.querySelector("#texto");
  const publicacoesDiv = document.querySelector("#publicacoes");

  botao.addEventListener("click", () => {
    const texto = textarea.value.trim();

    if (texto !== "") {
      const novaPublicacao = document.createElement("div");
      novaPublicacao.classList.add("publicacao");
      novaPublicacao.textContent = texto;

      publicacoesDiv.appendChild(novaPublicacao);
      textarea.value = "";
    } else {
      alert("Por favor, escreva algo antes de enviar.");
    }
  });
});
