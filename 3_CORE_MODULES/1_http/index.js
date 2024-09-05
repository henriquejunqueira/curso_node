const http = require('http'); // importa o módulo http e atribui à constante http

const port = 3000; // define a porta que o servidor http vai rodar

// cria o servidor http passando uma arrow function como parâmetro
// e esta contém os parâmetros de requisição e resposta
const server = http.createServer((requisition, response) => {
  response.write('Oi HTTP'); // escreve a resposta que o servidor dará ao usuário
  response.end(); // finaliza a resposta para não carregar infinitamente
});

// cria uma escuta na porta definida anteriormente fazendo a execução do servidor
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

// escuta o sinal SIGINT (Ctrl + C) e fecha o servidor
// process.on('SIGINT', () => {
//   console.log('Servidor está sendo desligado...');

//   server.close(() => {
//     console.log('O servidor foi encerrado...');
//     process.exit(0); // Encerra o processo Node.js
//   });
// });
