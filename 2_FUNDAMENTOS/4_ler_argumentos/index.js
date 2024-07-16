// nome

// * o process.argv retorna o caminho do executável do node, caminho do arquivo executado e o argumento
console.log(process.argv);

const args = process.argv.slice(2); // * pega o item no indice 2 do process.argv

console.log(args);

// ? O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings
// ? em um array e retorna o array.
const nome = args[0].split('=')[1]; // * pega o item após o = no índice 0 do array

console.log(nome);

const idade = args[1].split('=')[1]; // * pega o item após o = no índice 1 do array

console.log(idade);

console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`);
