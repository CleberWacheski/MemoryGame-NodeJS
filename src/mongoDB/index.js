const mongoose = require('mongoose')
require('dotenv').config()

const URI_MONGO_DB = process.env.URI_MONGO_DB

mongoose.connect(URI_MONGO_DB,{
    dbName : "MemoryGame"
})
const db = mongoose.connection

module.exports = db
 