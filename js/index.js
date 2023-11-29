function validaContato() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");

    if (nome.value == "") {
        alert('Informe o nome!');
    }

    if (email.value == "") {
        alert('Informe o Email!');
    }

    if (mensagem.value == "") {
        alert('Escreva uma mensagem!');
    }

    if (nome.value != "" && email.value != "" && mensagem.value != "") {
        alert("Nome: " + nome.value + "\n" + "Email: " + email.value + "\n" + "Mensagem: " + mensagem.value);
    }
}