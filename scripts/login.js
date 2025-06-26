const formLogin = document.querySelector("#form-login");

if (formLogin) {
    formLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        const campos = document.querySelectorAll(".alice");
        const email = campos[0].value.trim();
        const senha = campos[1].value.trim();

        
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verifica se os dados 
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

        if (usuarioEncontrado) {
            alert("Login realizado com sucesso!");
            window.location.href = "funcionalidades.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
}
