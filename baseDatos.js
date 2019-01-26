const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/gymnasio')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log("base gymnasio conectada")
})

const usuario = new mongoose.Schema({
    nombre: String,
    password: String,
    activo: Boolean

})

const Usuario = mongoose.model('Usuario', usuario)

function findUsuarios() {
    return Usuario.find()
}

function findUsuario(usuario) {
    return Usuario.findOne({ 
        nombre: new RegExp(usuario.nombre, 'i'),
        password: usuario.pass
    })
}

function addUsuario(usuarioDto) {
    let usuario = new Usuario( {nombre : usuarioDto.nombre, password: usuarioDto.password, activo: false})
    return usuario.save()
}

findUsuarios().then( data => {
    for (elem of data)
        console.log(elem)
})

findUsuario({nombre: "fede", password: "cac"}).then( data => {
    console.log(data)
})

//console.log(addUsuario({nombre : "fff", password: "bla"}))

exports.addUsuario = addUsuario
exports.findUsuario = findUsuario
exports.findUsuarios = findUsuarios
