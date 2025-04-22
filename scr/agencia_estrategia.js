let currentIndex = 0;
const imagesToShow = 2; // Número de imagens a serem exibidas
const totalImages = document.querySelectorAll('.carousel-images img').length;

// Atualiza a posição do carrossel
function moveSlide() {
    currentIndex += 1;

    if (currentIndex >= Math.ceil(totalImages / imagesToShow)) {
        currentIndex = 0; // Volta para o primeiro conjunto de imagens
    }

    const offset = -currentIndex * (100 / imagesToShow); // Calcula a posição do slide
    document.getElementById('carouselImages').style.transform = `translateX(${offset}%)`;
}

// Mover automaticamente as imagens
setInterval(moveSlide, 2300); // Mover a cada 2s