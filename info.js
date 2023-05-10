const express = require('express');
const app = express();
const cors = require('cors');
const { getPets } = require('./controller');

app.use(cors());
app.use(express.json());

app.get('/', getPets);

app.listen(3000, () => {
	console.log('listening on port 3000');
});
