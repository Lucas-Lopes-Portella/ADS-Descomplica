document.getElementById('year').textContent = new Date().getFullYear();

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
    } else {
        alert(`Bem-vindo(a) ${email}!`);
    }
});

function validateEmail(email) {
    const regra = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regra.test(email);
}