require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Rollbar = require('rollbar');
const { getPets } = require('./controller');
const { PORT, ROLLBAR_ACCESS_TOKEN } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

const rollbar = new Rollbar({
	accessToken: ROLLBAR_ACCESS_TOKEN,
	captureUncaught: true,
	captureUnhandledRejections: true,
});

app.get('/', getPets);

try {
	app.get('/', nonFunction);
} catch {
	rollbar.critical('error thrown');
}

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
