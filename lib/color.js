const chalk = require('chalk')
const color = (text, color) => {
return !color ? chalk.red(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.red(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
