const fs = require('fs');

// unlink remove um arquivo
fs.unlink('arquivo.txt', function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Arquivo removido!');
  }
});
