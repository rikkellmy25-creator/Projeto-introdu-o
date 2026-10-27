const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    alert(`Voluntario Cadastrado com Sucesso\n Nome: ${nome}\nE-mail: ${email}`);
});