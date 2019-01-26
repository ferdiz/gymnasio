const mongoose = require('mongoose')
const baseDatos = require('./usuario')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.sendfile('public/indexGim.html')
});

app.post('/listarPersonas', function (req, res) {
   baseDatos.listarPersonas().then(function (data) {
      res.send(data)
   });
});
app.get('/login', function (req, res) {
   res.sendfile('public/login.html')
})
app.post('/login', function (req, res) {

   persona = {
      nombre: req.body.nombre,
      pass: req.body.pass
   }
   baseDatos.findUsuario(persona).then(function (data) {
      res.send(data)
   })
})

app.post('/registrarse', function (req, res) {
   persona = {
      nombre: req.body.nombre,
      pass: req.body.pass
   }
   baseDatos.findUsuario(persona).then(function (data) {
      if (data != null) {
         res.send({msn:'El usuario Existe'})
      } else {
         baseDatos.addUsuario(persona);
         res.send({msn:'fue registrado exitosamente'})
      }

   })
})

app.listen(3000);