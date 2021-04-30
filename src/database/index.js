const mongoose = require('mongoose')
const db = mongoose.connection


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/noderest', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

db.on('error', ()=> console.error("erro"))
db.once('open', ()=>{
    console.log("on")
})



module.exports = mongoose