const baseDatos = require('./baseDatos')

const mongoose = baseDatos.mongoose

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

exports.addUsuario = addUsuario
exports.findUsuario = findUsuario
exports.findUsuarios = findUsuarios