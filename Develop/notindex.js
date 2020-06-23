fs = require("fs");
fs.writeFile("magicREADME.md", "Hello World!", function (err) {
	if (err) return console.log(err);
	console.log("what? did this work? woo, i did a thing!");
});
