const mongoose = require('mongoose')
const baseDatos = require('./baseDatos')
const express = require('express');
const app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/listarPersonas', function(req, res){
    baseDatos.listarPersonas().then(function(data){
       res.send(data)
    });
 });

app.listen(3000);