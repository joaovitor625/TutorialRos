// docs/js/copy-code.js

// Espera a página carregar
document.addEventListener('DOMContentLoaded', (event) => {
  // Encontra todos os blocos de código
  document.querySelectorAll('pre > code').forEach((codeBlock) => {
    // Pega o elemento 'pre' (o container do bloco)
    const pre = codeBlock.parentElement;

    // Cria o botão
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copiar';

    // Adiciona o evento de clique
    button.addEventListener('click', () => {
      // Copia o texto do bloco de código para a área de transferência
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        // Feedback visual
        button.innerText = 'Copiado!';
        setTimeout(() => {
          button.innerText = 'Copiar';
        }, 2000); // Volta a ser "Copiar" depois de 2 segundos
      }, (err) => {
        button.innerText = 'Erro'; // Em caso de falha
        console.error('Falha ao copiar: ', err);
      });
    });

    // Adiciona uma classe ao 'pre' para o CSS funcionar
    pre.classList.add('code-block-wrapper');
    // Adiciona o botão ao container 'pre'
    pre.appendChild(button);
  });
});