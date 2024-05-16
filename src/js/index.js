/* 
OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal co o vídeo do trailer.
    PASSO 1-  dar um jeito de pegar o elemneto que representa o botão na tela usando o js;
    PASSO 2- dar um jeito de identificar quando o usuário clicar no botão;
    PASSO 3- dar um jeito de pegar o elemento da modalnmo js;
    PASSO 4- abrir a modal na tela.

OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal.
    PASSO 1- dar um jeito de pegar o elemento de fechar modal usando o js;
    PASSO 2- dar um jeito de identificar quando o usuário clicar no X;
    PASSO 3- fechar a modal.

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal(); 
    video.setAttribute("src", linkDoVideo);
});   

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});    

