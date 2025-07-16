// Menu mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('show');
});

// ===========================================
// Lógica do Lightbox (Expansão de Imagem)
// ===========================================
const lightbox = document.getElementById('lightbox'); // ID do seu lightbox principal
const lightboxImg = document.getElementById('lightbox-img'); // ID da imagem dentro do lightbox
const closeBtn = document.querySelector('.close-btn'); // Classe do botão de fechar

// Função para abrir o lightbox
function openLightbox(src) {
    lightbox.style.display = 'flex'; // Usar flex para centralizar
    lightboxImg.src = src;
    document.body.style.overflow = 'hidden'; // Evita rolagem do body quando o lightbox está aberto
}

// Função para fechar o lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxImg.src = ''; // Limpa a imagem para otimização
    document.body.style.overflow = ''; // Restaura a rolagem do body
}

// Adiciona evento de clique a todas as imagens da galeria
// (Isso vai pegar itens da classe 'galeria-item' que contêm as imagens)
document.querySelectorAll('.galeria-item img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src); // 'this.src' pega o caminho da imagem clicada
    });
});

// Evento de clique no botão de fechar
closeBtn.addEventListener('click', closeLightbox);

// Evento de clique fora da imagem (no fundo embaçado) para fechar o lightbox
lightbox.addEventListener('click', function(e) {
    // Verifica se o clique foi no elemento lightbox em si (o fundo), e não na imagem dentro dele
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Evento de teclado para fechar (tecla ESC)
document.addEventListener('keydown', function(e) {
    // Verifica se a tecla pressionada foi 'Escape' e se o lightbox está visível
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
    }
});