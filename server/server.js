var express = require('express');

var app = express();

var html_dir = "./app/";

app.get('/', function(req, res) {
    res.sendfile(html_dir + 'index.html');
});

app.listen(42000);

console.log('~~ Lancement du serveur');