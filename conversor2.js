function converterPlacaMercosulParaAntiga() {
    // Obter o valor da placa Mercosul
    var placaMercosul = document.getElementById('placaMercosul').value.toUpperCase();
  
    // Verificar se o formato da placa Mercosul é válido (AAA1B11)
    var regex = /^[A-Z]{3}\d[A-Z]\d{2}$/;
    if (regex.test(placaMercosul)) {
      // Extrair a parte numérica e substituir a letra pelo dígito correspondente
      var parteNumerica = placaMercosul.substring(3, 4) + substituirLetraPorDigito(placaMercosul.charAt(4)) + placaMercosul.substring(5);
  
      // Construir a placa antiga
      var placaAntiga = placaMercosul.substring(0, 3) + '-' + parteNumerica;
  
      // Atualizar o elemento HTML com a placa convertida
      document.getElementById('placaConvertida1').textContent =placaAntiga;
    } else {
      // Informar ao usuário que o formato da placa Mercosul é inválido
      alert('Formato de placa Mercosul inválido. Digite uma placa no formato AAA1B11.');
    }
  }
  
  function substituirLetraPorDigito(letra) {
    // Substituir a letra pelo dígito correspondente
    var correspondencias = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    return correspondencias.indexOf(letra);
  }
  