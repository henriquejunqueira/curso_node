const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const chalk = require('chalk');

try {
	prompt([
		{
			name: 'nome',
			message: 'Qual o seu nome?',
		},
		{
			name: 'idade',
			message: 'Qual a sua idade?',
		},
	]).then((perguntas) => {
		const resposta = `${perguntas.nome} tem ${perguntas.idade} anos de idade.`;

		console.log(chalk.bgYellow.black.bold(resposta));
	});
} catch (erro) {
	console.log(`Erro: ${erro}`);
}
