const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! university of bridgeport this is sai prasannna roshi'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
