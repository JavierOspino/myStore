const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Holaaaa');
});

app.listen(port, () => {
  console.log("Running in " + port);
});

routerApi(app);
