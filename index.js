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
app.get('/login',function(req,res){
   res.sendfile('login.html')
})
 app.post('/login',function(req,res){

    persona={
      nombre:res.nombre,
      pass:res.pass
    }
      baseDatos.findUsuario(persona).then(function(data){
         if(data.activo){
            res.send(data.activo)
         }else{
            res.redirect('/registrarse.html')
         }
            
      })
 })
 app.get('/registrarse',function(){
    res.sendfile('registrarse.html')
 })
 app.post('/registrarse',function(req,res){
   persona={
      nombre:res.nombre,
      pass:res.pass
    }
    baseDatos.findUsuario(persona).then(function(data){
      if(data.activo){
         res.send('Existe un usuario con el mmismo nombre. Ingrese otro')
      }else{
         baseDatos.addUsuario(persona);
         res.send('El usuario se registro con exito')  
      } 
      
   } ) 
})


 

app.listen(3000);