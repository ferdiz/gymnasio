const mongoose = require('mongoose')
const baseDatos = require('./baseDatos')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
   res.sendfile('indexGim.html')
});

app.post('/listarPersonas', function(req, res){
    baseDatos.listarPersonas().then(function(data){
       res.send(data)
    });
 });

app.listen(3000);