const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/gymnasio')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log("base gymnasio conectada")
})
const persona = new mongoose.Schema({
    nombre: String
})

const Persona = mongoose.model('Persona', persona)

function listarPersonas() {
    return Persona.find().exec()
}

exports.listarPersonas = listarPersonas