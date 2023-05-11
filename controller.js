module.exports = {
	getPets: (req, res) => {
		res.setHeader('Content-Type', 'text/html').status(200).send('Draven');
	},
};
