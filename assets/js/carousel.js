// ===========================================================
// CARROSSEL DE IMAGENS — COLEÇÕES NA HOME
// Alterna as imagens dos cards a cada 4 segundos
// ===========================================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('Carousel iniciado!'); // Para debug

  const sliders = document.querySelectorAll('.imagem-colecao-slider');

  if (sliders.length === 0) {
    console.log('Nenhum slider encontrado.');
    return;
  }

  console.log('Sliders encontrados:', sliders.length);

  sliders.forEach(function(slider, index) {
    const imagens = slider.querySelectorAll('img');
    
    if (imagens.length === 0) {
      console.log('Slider ' + index + ' sem imagens.');
      return;
    }

    console.log('Slider ' + index + ' tem ' + imagens.length + ' imagens.');

    let indexAtual = 0;

    // Função que troca a imagem ativa
    function trocarImagem() {
      // Remove a classe 'ativa' de todas as imagens
      imagens.forEach(function(img) {
        img.classList.remove('ativa');
      });

      // Avança para a próxima imagem (volta ao início se for a última)
      indexAtual = (indexAtual + 1) % imagens.length;

      // Adiciona a classe 'ativa' na imagem atual
      imagens[indexAtual].classList.add('ativa');
      
      console.log('Slider ' + index + ' - imagem ' + (indexAtual + 1) + ' ativada.');
    }

    // Troca a imagem a cada 3 segundos
    setInterval(trocarImagem, 3000);
  });
});
