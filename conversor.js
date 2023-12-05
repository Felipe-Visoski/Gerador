function converterPlaca() {
    // Obter o valor da placa antiga
    var placaAntiga = document.getElementById('placaAntiga').value.toUpperCase();

    // Verificar se o formato da placa antiga é válido (AAA-1111)
    var regex = /^[A-Z]{3}-\d{4}$/;
    if (regex.test(placaAntiga)) {
      // Extrair a parte numérica e substituir o segundo dígito pela letra correspondente
      var parteNumerica = placaAntiga.substring(4);
      var segundaLetra = substituirPorLetra(parteNumerica.charAt(1));

      // Construir a placa Mercosul
      var placaNova = placaAntiga.substring(0, 3) + parteNumerica.charAt(0) + segundaLetra + parteNumerica.substring(2);

      // Atualizar o elemento HTML com a placa convertida
      document.getElementById('placaConvertida').textContent = 'Placa Mercosul: ' + placaNova;
    } else {
      // Informar ao usuário que o formato da placa antiga é inválido
      alert('Formato de placa antiga inválido. Digite uma placa no formato AAA-1111.');
    }
  }

  function substituirPorLetra(digito) {
    // Substituir o segundo dígito pela letra correspondente
    var correspondencias = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    return correspondencias[parseInt(digito)];
  }
