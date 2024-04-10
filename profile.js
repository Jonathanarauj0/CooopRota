document.getElementById("profileForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que o formulário seja enviado

    // Captura os valores do formulário
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Cria um objeto de perfil do usuário
    var userProfile = {
        username: username,
        email: email,
        password: password
    };

    // Exibe o perfil do usuário na página
    var profileDisplay = document.getElementById("profileDisplay");
    profileDisplay.innerHTML = "<h2>Perfil do Usuário</h2>" +
                                "<p><strong>Nome de Usuário:</strong> " + userProfile.username + "</p>" +
                                "<p><strong>Email:</strong> " + userProfile.email + "</p>";

    // Limpa os campos do formulário
    document.getElementById("profileForm").reset();
});
