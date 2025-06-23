 function criarCard({ imagem, titulo, ano, preco, vendido = false }) {
    const container = document.getElementById('product-container');

    const card = document.createElement('div');
    card.className = vendido ? 'vendido' : 'product-card';

    card.innerHTML = `
      <img src="${imagem}" alt="${titulo}" class="product-img">
      <h2 class="product-title">${titulo}</h2>
      <p class="Ano">${ano}</p>
      <p class="product-price">${vendido ? 'VENDIDO' : preco}</p>
      ${!vendido ? `<button class="contact-button">Entrar em contato</button>` : ''}
    `;

    container.appendChild(card);
  }