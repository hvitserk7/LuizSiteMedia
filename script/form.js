function calcularMedia() {
    
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    
    let situacao;
    if (media >= 6) {
        situacao = 'Aprovado';
    } else if (media >= 4 && media < 6) {
        situacao = 'IFA';
    } else {
        situacao = 'REPROVADO';
    }

    
    document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)} - Situação: ${situacao}`;
}
