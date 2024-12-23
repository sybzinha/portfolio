// Atualizar o relógio
function updateClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();

    // Formatar a hora
    const timeString = now.toLocaleTimeString('pt-BR', { hour12: false, hour: '2-digit', minute: '2-digit' });

    // Formatar a data
    const dateString = now.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

    // Atualizar a hora e a data separadamente
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock();

// Player de música com imagem no botão de play/pause
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const volumeSlider = document.getElementById('music-volume');

// Alternar entre play e pause com imagens
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.src = './src/icons/pause.png'; // Alterar para ícone de pausa
    } else {
        audioPlayer.pause();
        playPauseButton.src = './src/icons/play.png'; // Alterar para ícone de play
    }
});

// Ajustar o volume da música
volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;
});

// Remove a seleção de todos os ícones ao carregar a página
document.querySelectorAll('.icon').forEach(icon => {
    icon.classList.remove('selected');
  });
  
  // Adiciona um evento de clique para selecionar/deselecionar o ícone
  document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function() {
      // Remove a seleção de todos os ícones
      document.querySelectorAll('.icon').forEach(icon => {
        icon.classList.remove('selected');
      });
  
      // Adiciona a classe 'selected' ao ícone clicado
      this.classList.add('selected');
    });
  });

  // Adiciona um evento de clique ao ícone "linkedin"
document.querySelector('.icon[data-app="linkedin"]').addEventListener('click', function() {
    // Abre a URL do Linkedin em uma nova aba
    window.open('https://www.linkedin.com/in/sybilla-coppi-955bb1274/', '_blank');  
  });
  
// Abrir o modal
document.querySelector('.icon[data-app="portfolio"]').addEventListener("click", function() {
    document.getElementById("portfolio-modal").style.display = "block";
  });
  
  // Fechar o modal
  document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("portfolio-modal").style.display = "none";
  });