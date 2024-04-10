// Mapeamento de idiomas para arquivos de tradução
const translations = {
    'pt': 'Olá',
    'en': 'Hello!',
    'es': '¡Hola!',
    'fr': 'Bonjour !'
};

// Função para atualizar o conteúdo com base no idioma selecionado
function changeLanguage() {
    const selectedLanguage = document.getElementById('language-selector').value;
    // Atualize o conteúdo do site com a tradução correspondente
    document.getElementById('greeting').innerText = translations[selectedLanguage];
}

// Adicione um ouvinte de eventos para o seletor de idioma
document.getElementById('language-selector').addEventListener('change', changeLanguage);

// Chame a função changeLanguage para exibir o conteúdo no idioma padrão
changeLanguage();
