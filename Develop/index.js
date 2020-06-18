var inquirer = require("inquirer");

const questions = [
	{
		type: "input",
		message: "What is your name?",
		name: "username",
		validate: function () {
			// inspect inquirer for examples... **??but not required for this assignment.**
		},
	},
];

function writeToFile(fileName, data) {}

function init() {
	inquirer.prompt(questions).then((response) => {
		// if (response.username === "") {
		// 	console.log("please enter name");
		// 	init();
		// }
		console.log(response.username);
	});
}

init();
