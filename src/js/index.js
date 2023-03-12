/*  OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    
    - passo 3 - desmarcar o botão selecionado anterior 
    
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    
    - passo 5 - esconder a imagem de fundo anterior
    
    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

*/

//1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
    
            
        desativarBotaoSelecionado();
      
        
        ativarBotaoSelecionado(botao);

       
       esconderImagemAtiva();

       
        mostraImagemDeFundo(indice);


    })
})

function mostraImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function ativarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
