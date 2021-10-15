const btnLogin = document.getElementById('btn-login')
btnLogin.addEventListener('click', () => {
    const inputUsuario = document.getElementById('login-field')
    const inputSenha = document.getElementById('password-field')
    const usuario = 'rodrigo.gerente'
    const senha = '1234'

    if(inputUsuario.value == usuario && inputSenha.value == senha) {
        window.location = '/index.html'
    } else {
        alert('Usuário ou senha inválidos!')
    }
})