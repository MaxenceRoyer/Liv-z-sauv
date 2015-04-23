var express = require('express');

var app = express();

var html_dir = "./app/";

app.get('/', function(req, res) {
    res.sendfile(html_dir + 'index.html');
});

app.get('/styles/bootstrap/bootstrap.min.css', function(req, res) {
    res.sendfile(html_dir + '/styles/bootstrap/bootstrap.min.css');
});

app.get('/styles/appli/style.css', function(req, res) {
    res.sendfile(html_dir + '/styles/appli/style.css');
});

app.get('/scripts/bootstrap/bootstrap.min.js', function(req, res) {
    res.sendfile(html_dir + "/scripts/bootstrap/bootstrap.min.js");
});

app.listen(42000);

console.log('~~ Lancement du serveur');