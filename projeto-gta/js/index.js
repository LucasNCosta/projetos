// Objetivo 1: Quando o usuário clicar no botao de seleção de plataformas deve abrir uma caixa com os botões.

// Objetivo 2: Caso já aberta e o usuário clicar no botão fechar, o conteúdo deve ser escondido.

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});