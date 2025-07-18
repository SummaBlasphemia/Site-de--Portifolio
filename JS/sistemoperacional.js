document.addEventListener("DOMContentLoaded", () => {
  const apps = document.querySelectorAll(".app-container");
  const monitor = document.querySelector(".monitor");

  apps.forEach((app, index) => {
    app.addEventListener("dblclick", () => {
      const janela = document.createElement("div");
      janela.classList.add("janela");

      janela.innerHTML = `
        <div class="janela-header">
          <span>Aplicativo ${index + 1}</span>
          <button class="fechar-janela">X</button>
        </div>
        <div class="janela-body">
          <p>Conteúdo do App ${index + 1}</p>
        </div>
      `;

      // Botão de fechar
      janela.querySelector(".fechar-janela").addEventListener("click", () => {
        janela.remove();
      });

      // Adiciona no monitor
      monitor.appendChild(janela);

      // Torna a janela arrastável
      moverJanela(janela, janela.querySelector(".janela-header"));
    });
  });

  function moverJanela(janela, header) {
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - janela.offsetLeft;
      offsetY = e.clientY - janela.offsetTop;
      janela.style.zIndex = Date.now(); // Traz pra frente
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        janela.style.left = `${e.clientX - offsetX}px`;
        janela.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }
});
