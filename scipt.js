document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumenta-fonte');
    const diminuiFonteBotao = document.getElementById('diminui-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    const botaoDeAcessibilidade = document.getElementById ('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById ('opcoes-acessibilidade');
    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botão');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });
});
