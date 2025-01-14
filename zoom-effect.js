const imageContainer = document.querySelector('.image-zoom-container');
const mainImage = document.querySelector('.main-image');
const zoomLens = document.querySelector('.zoom-lens');
const zoomResult = document.querySelector('.zoom-result');

// Configura a imagem de fundo para o zoom resultante
zoomResult.style.backgroundImage = `url(${mainImage.src})`;

imageContainer.addEventListener('mouseenter', () => {
    zoomLens.style.display = 'block';
    zoomResult.style.display = 'block';
});

imageContainer.addEventListener('mouseleave', () => {
    zoomLens.style.display = 'none';
    zoomResult.style.display = 'none';
});

imageContainer.addEventListener('mousemove', (e) => {
    const rect = imageContainer.getBoundingClientRect();
    const lensWidth = zoomLens.offsetWidth / 2;
    const lensHeight = zoomLens.offsetHeight / 2;

    // Calcula a posição da lente
    let x = e.clientX - rect.left - lensWidth;
    let y = e.clientY - rect.top - lensHeight;

    // Restringe a lente dentro dos limites da imagem
    x = Math.max(0, Math.min(x, mainImage.width - zoomLens.offsetWidth));
    y = Math.max(0, Math.min(y, mainImage.height - zoomLens.offsetHeight));

    // Move a lente
    zoomLens.style.left = `${x}px`;
    zoomLens.style.top = `${y}px`;

    // Calcula a posição do zoom
    const bgX = (x / mainImage.width) * 100;
    const bgY = (y / mainImage.height) * 100;

    // Atualiza a posição do background da área ampliada
    zoomResult.style.backgroundPosition = `${bgX}% ${bgY}%`;
});