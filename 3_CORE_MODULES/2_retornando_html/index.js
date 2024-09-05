const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200; // seta o código como 200, ou seja OK
  res.setHeader('Content-Type', 'text/html'); // seta o cabeçalho como html
  res.end(
    '<h1>Olá, este é meu primeiro server com HTML!</h1><p>Teste atualização</p>'
  ); // finaliza a resposta com um html
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
