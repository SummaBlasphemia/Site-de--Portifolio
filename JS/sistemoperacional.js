document.querySelectorAll('.app-container').forEach(container => {
  container.addEventListener('click', () => {
    // Remove seleção de todos os app-containers
    document.querySelectorAll('.app-container').forEach(c => c.classList.remove('selecionado'));

    // Adiciona a classe no container clicado
    container.classList.add('selecionado');
  });
});