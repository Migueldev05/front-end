const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("capturedImage");
const button = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

//solicitar acesso à câmera
navigator.mediaDevices.getUserMedia({ video: true})
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch( erro => {
        console.error("Erro ao acessar a câmera: ", erro);
    });

// atribuir uma função para o botão de captura

button.addEventListener("click", () => {
    // Desenhar o quadro atual do vídeo no área do canvas
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Obter a imagem como url de dados
    const imageDataURL = canvas.toDataURL("image/png");
    // Enviar imagem para um servidor
    enviarImagemParaServidor(imageDataURL);
})
// Função  para enviar imagem para um servidor 
function enviarImagemParaServidor(imageDataURL){
    // Simular o envio da imagem para um servidor
    console.log("Enviando a imagem para o servidor...")

    fetch("/", {
        method: "POST",
        body: JSON.stringify(),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resposta => resposta.json)
      .then(dados => {
        console.log("Resposta do servidor: ", dados);
      })
      .catch(erro => {
        console.error("Erro ao enviar a imagem: ", erro);
      })
}
