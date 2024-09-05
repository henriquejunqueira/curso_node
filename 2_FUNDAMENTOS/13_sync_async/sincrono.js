const fs = require('fs');

console.log('Início');

fs.writeFileSync('arquivo.txt', 'olá');

console.log('Fim');
