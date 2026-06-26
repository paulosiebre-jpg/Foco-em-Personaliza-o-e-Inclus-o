// Função para controlar a troca de Abas (Tabs)
function openTab(event, tabId) {
    // Esconde todos os conteúdos das abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove a classe "active" de todos os botões
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Mostra a aba atual e adiciona a classe "active" ao botão clicado
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Função para simular a alteração de acessibilidade por IA
function changeTextMode(mode) {
    const textBlock = document.getElementById('demo-text');

    // Reseta as classes antes de aplicar a nova
    textBlock.className = '';

    if (mode === 'dislexia') {
        textBlock.classList.add('font-dyslexia');
    } else if (mode === 'foke' || mode === 'foco') {
        textBlock.classList.add('high-contrast');
    }
    // Se for 'normal', ele apenas limpa as classes (estilo original)
}
