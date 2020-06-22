var inquirer = require("inquirer");
const fs = require("fs");

const questions = [
	{
		type: "input",
		message: "What is your Project Title?",
		name: "projectTitle",
		// validate: function () {
		// 	// inspect inquirer for examples... **??but not required for this assignment.**
		// },
	},
	{
		type: "input",
		message: "Describe your project",
		name: "projectDescription",
	},
	{
		type: "input",
		message: "List Table of Contents.",
		name: "tableOfContents",
	},
	{
		type: "input",
		message: "Installation instructions",
		name: "installation",
	},
	{
		type: "input",
		message: "Usage",
		name: "usage",
	},
	{
		type: "input",
		message: "License",
		name: "license",
	},
	{
		type: "input",
		message: "Contributing",
		name: "contributing",
	},
	{
		type: "input",
		message: "Tests",
		name: "tests",
	},
	{
		type: "input",
		message: "Questions",
		name: "questions",
	},
];

function init() {
	inquirer.prompt(questions).then((response) => {
		// if (response.username === "") {
		// 	console.log("please enter name");
		// 	init();
		// }
		console.log(response);
	});
	fs.appendFile("./README.md", questions.response, (err) => {
		if (err) throw err;
	});
}

init();
