const mongoose = require('mongoose')
const baseDatos = require('./baseDatos')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
   res.sendfile('indexGim.html')
});

app.post('/listarPersonas', function (req, res) {
   baseDatos.listarPersonas().then(function (data) {
      res.send(data)
   });
});
app.get('/login', function (req, res) {
   res.sendfile('login.html')
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
         res.send(data)
      } else {
         baseDatos.addUsuario(persona);
         res.send(data)
      }

   })
})

app.listen(3000);