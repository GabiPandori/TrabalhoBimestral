const formCadastro = document.querySelector("#form-cadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", function(event) {
        event.preventDefault();
        //lista para armazenar os dados
        const campos = document.querySelectorAll(".alice");
        const nome = campos[0].value.trim();
        const email = campos[1].value.trim();
        const senha = campos[2].value.trim();

        
        if (!nome || !email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const novoUsuario = {
            nome,
            email,
            senha
        };

        
        const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuariosSalvos.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

        alert("Usuário cadastrado com sucesso!");
        window.location.href = "login.html";
    });
}
