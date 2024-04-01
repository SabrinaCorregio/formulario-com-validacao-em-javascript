document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const message = document.getElementById('message');

    if (campoB > campoA) {
        showMessage("Formulário válido!", true);
    } else {
        showMessage("Formulário inválido! O número B deve ser maior que o número A.", false);
    }
});

function showMessage(msg, isValid) {
    const message = document.getElementById('message');
    message.textContent = msg;
    message.className = isValid ? 'valid message' : 'invalid message';
}