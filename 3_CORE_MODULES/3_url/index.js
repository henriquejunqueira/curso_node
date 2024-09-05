const url = require('url'); // importa o módulo url e atribui na const url
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'; // a const address recebe um link
const parsedUrl = new url.URL(address); // a const parsedUrl recebe uma instância de url com o link

console.log(parsedUrl.host); // exibe o host: www.meusite.com.br
console.log(parsedUrl.pathname); // exibe o pathname: /catalog
console.log(parsedUrl.search); // exibe a pesquisa: ?produtos=cadeira
console.log(parsedUrl.searchParams); // exibe os parâmetros da pesquisa: URLSearchParams { 'produtos' => 'cadeira' }
console.log(parsedUrl.searchParams.get('produtos')); // exibe o que é pesquisado na chave produto: cadeira
