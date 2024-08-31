const minimist = require('minimist'); // importa o módulo externo "minimist"

const args = minimist(process.argv.slice(2)); // resgata o segundo argumento

console.log(args); // exibe o valor do argumento

const nome = args['nome']; // args['nome'] é referente ao argumento --nome passado no console

//console.log(nome);

const profissao = args['profissao'];

console.log(nome, profissao);

console.log(`O nome dele é ${nome} e a profissão dele é ${profissao}`);
