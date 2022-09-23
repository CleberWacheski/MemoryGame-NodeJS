const { json } = require('express')
const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const router = require('./routes/index')

app.use(json())
app.use(cors())

app.use('/',router)


const PORT = process.env.PORT

app.listen(PORT,()=> {
    console.log("Server is running")
})