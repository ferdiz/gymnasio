const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/gymnasio', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log("base gymnasio conectada")
})

exports.mongoose = mongoose