const imageContainer = document.querySelector('.image-zoom-container');
const mainImage = document.querySelector('.main-image');
const zoomLens = document.querySelector('.zoom-lens');

// Mostra a lente ao passar o mouse na imagem
imageContainer.addEventListener('mouseenter', () => {
    zoomLens.style.display = 'block';
});

// Esconde a lente ao sair da imagem
imageContainer.addEventListener('mouseleave', () => {
    zoomLens.style.display = 'none';
});

// Atualiza a posição da lente conforme o mouse se move
imageContainer.addEventListener('mousemove', (e) => {
    const rect = imageContainer.getBoundingClientRect();

    // Calcula a posição do mouse relativa ao container
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Centraliza a lente no ponto do mouse
    const lensSize = zoomLens.offsetWidth / 2;
    zoomLens.style.left = `${x - lensSize}px`;
    zoomLens.style.top = `${y - lensSize}px`;
});