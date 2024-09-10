document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!validateForm(username, password)) {
            return; // Se a validação falhar, não prosseguir
        }

        fetch('/validarUsuarioSenha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.usuarioEncontrado) {
                console.log('Usuário encontrado');
                alert('Login realizado com sucesso. Seja bem-vindo ' + username + '.');
                window.location.href = '/TelaInicial';
            }
            else {
                alert('O usuário ou a senha estão incorretos. Por favor, informe-os corretamente para realização de login.');
            }
        })
        .catch(error => {
            console.error('Houve um erro ao validar o usuário e a senha no banco de dados. Motivo: ', error);
        });
    });

    function validateForm(username, password) {
        if (username.trim() === '') {
            alert('O usuário não pode ficar em branco. Por favor, informe-o para realizar o login.');
            return false;
        }

        if (password.trim() === '') {
            alert('A senha não pode ficar em branco. Por favor, informe-a para realizar o login.');
            return false;
        }

        return true;
    }
});
