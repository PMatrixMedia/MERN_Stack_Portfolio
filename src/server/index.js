const express = require('express');
const os = require('os');
const app = express();



app.use('/static',  express.static("src"));



app.use('/static',  express.static("Pages"));

app.use('/static' , express.static("Components"));

app.use('/static', express.static("Images"));

app.get("/", function(req, res) {
  res.send("hello world");
});

app.use(express.static("client"));
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
