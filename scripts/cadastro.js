const formCadastro = document.querySelector("#form-cadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", function(event) {
        event.preventDefault(); 

        //lista para armazenar os dados:
        const campos = document.querySelectorAll(".alice");
        const nome = campos[0].value;
        const email = campos[1].value;
        const senha = campos[2].value;

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        // salva o usuário no navegador
        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Usuário cadastrado com sucesso!");
        window.location.href = "login.html";
    });
}
