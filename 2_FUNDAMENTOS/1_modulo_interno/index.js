// * importa o módulo. É necessário o ./ para dizer que é um módulo interno. Não é necessário a extensão
const meuModulo = require('./meu_modulo');

// * encapsula o módulo em uma variável sem os parênteses, pois com parênteses estará executando a função
const soma = meuModulo.soma;

// * utiliza a função soma do módulo
soma(2, 3); // ? 5
soma(5, 10); // ? 15

//meuModulo.soma(10, 10); // outra forma de chamar a função
