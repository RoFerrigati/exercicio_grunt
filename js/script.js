document.getElementById('sorteioBtn').addEventListener('click', function() {
    const maxParticipants = parseInt(document.getElementById('maxParticipants').value);

    if (isNaN(maxParticipants) || maxParticipants < 1) {
        alert('Por favor, insira um número válido de participantes!');
        return;
    }

    const winner = Math.floor(Math.random() * maxParticipants) + 1;
    document.getElementById('resultado').textContent = `O vencedor é o participante nº ${winner}`;
});
