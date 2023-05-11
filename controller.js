module.exports = {
	getPets: (req, res) => {
		res;
		res.setHeader('Content-Type', 'application/json').status(200).send({
			name: 'Draven',
		});
	},
};
