document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

     
        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;

        if (login === 'usuario' && senha === '1234') {
            alert('Logado com sucesso!');
        } else {
            alert('Credenciais inválidas');
        }
    });
});
