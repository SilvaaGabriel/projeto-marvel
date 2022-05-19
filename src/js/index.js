/*

OBJETIVO 1: Quando passar o mouse pelo personagem, trocar o personagem:

-Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

-retirar a classe de selecionaod do personagem selecionado

OBJETIVO 2: Quando o mouse passar em cima de um personagem da listagem, trocar o nome e imagem e nome do personagem grande

-alterar a imagem do jogador 1
-alterar o nome do jogador 1

*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
                if(idSelecionado === 'ultron') return;
            const personagemSelecionado = document.querySelector('.selecionado')
            personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')
            
            const imagemJogador1 = document.getElementById('personagem-jogador-1');
            imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
            const nomeJogador1 =  document.getElementById ('nome-jogador-1');
            const nomeSelecionado = personagem.getAttribute('data-name')
            nomeJogador1.innerHTML = nomeSelecionado;
    })
})