var express = require('express');

var app = express();

var html_dir = "./app/";

 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendfile(html_dir + req.params[0]); 
 });

app.listen(42000);

console.log('~~ Lancement du serveur');