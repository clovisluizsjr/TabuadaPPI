import express from "express";
//alteração

const host = "0.0.0.0"; // ip
const porta = 4700; // porta para acesso no localhost
const app = express();

function numTabuada(requisicao, resposta) {
  // Extrair da URL o número para fazer a multiplicação na tabuada
  let tabuada = parseInt(requisicao.query.tabuada);
  let sequencia = parseInt(requisicao.query.sequencia);

  // Verificar se tabuada é nula, e se for, definir como 0
  if (!tabuada) {
    tabuada = 0;
  }

  // Caso a sequência não seja fornecida, definir como 10
  if (!sequencia) {
    sequencia = 10;
  }

  resposta.write("<!DOCTYPE html>");
  resposta.write("<html>");
  resposta.write("<head>");
  resposta.write('<meta charset="utf-8">');
  resposta.write("<title>Tabuada do Usuário</title>");
  resposta.write("</head>");
  resposta.write("<body>");
  resposta.write("<h1>Tabuada do " + tabuada + "</h1>");
  resposta.write("<ul>");

  for (let i = 0; i <= sequencia; i++) {
    resposta.write(
      "<li>" + tabuada + " x " + i + " = " + tabuada * i + "</li>"
    );
  }

  resposta.write("</ul>");
  resposta.write("</body>");
  resposta.write("</html>");
  resposta.end();
}

// Get para acessar a tabuada
app.get("/", numTabuada);

// Iniciar o servidor
app.listen(porta, host, () => {
  console.log("O servidor está escutando em http://" + host + ":" + porta);
});
