// Função para abrir uma aba de nomenclatura
function openTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
    document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add('active');
    event.target.classList.add('actuve');
}
document.addEventListener("DOMContentLoaded", function() {
    showTab('nomenclatura-A'); 
    showTab('nomenclatura-K');  // Exibe a aba 'nomenclatura-A' ao carregar
});

function showTab(tabId) {
    // Esconde todas as abas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Exibe a aba especificada
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}
    
// Função para abrir a biografia de um cientista
function openBio(bioId) {
    const biografias = {
        'marie-curie': 'Marie Curie foi uma pioneira nas pesquisas sobre radioatividade e recebeu dois Prêmios Nobel.',
        'john-dalton': 'John Dalton é conhecido por sua teoria atômica, que foi um grande avanço na química.',
        'dmitri-mendeleev': 'Dmitri Mendeleev criou a tabela periódica dos elementos, organizando-os de acordo com suas propriedades.'
    };
    alert(biografias[bioId] || 'Biografia não encontrada.');
}
function mostrarInfo(simbolo,nome,numeroAtomico,massaAtomica) {
    alert("Elemento:" + nome + "\nSimbolo:" + simbolo + "\nNumero Atomico:" + 
    numeroAtomico + "\nMassa Atomica" + massaAtomica);
}
// Função para pesquisa de cientistas e termos
function pesquisar() {
    const query = document.getElementById('search').value.toLowerCase();
    const resultados = [];
    if (query) {
        document.querySelectorAll('.cientista').forEach(cientista => {
            const nome = cientista.querySelector('h3').innerText.toLowerCase();
            if (nome.includes(query)) {
                resultados.push(nome);
            }
        });

        document.getElementById('resultados-pesquisa').innerHTML = resultados.length > 0 
            ? resultados.map(result => `<p>${result}</p>`).join('') 
            : '<p>Nenhum resultado encontrado.</p>';
    }
}

// Função para inicializar o conteúdo da página
function init() {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => openTab(button.dataset.tab));
    });
    document.getElementById('search').addEventListener('input', pesquisar);
}

// Inicializa o JavaScript quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', init);
