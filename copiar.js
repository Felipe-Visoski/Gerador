function copyToClipboardFromId(elementId) {
    // Obter o valor do elemento com o ID fornecido
    var textToCopy = document.getElementById(elementId).textContent;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Texto copiado com sucesso!');
            // Exibir um alert com o texto copiado
            alert('copiado para área de transferência:\n' + textToCopy);
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}
