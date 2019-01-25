const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const ctrl = require('./controller')

const massive = require('massive')
const app = express()

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
.then((datab) => {app.set('db', datab)})
.catch((err) => console.log(err))


const SERVER_PORT = 3030
app.listen(PORT, () => console.log(`We are live at port: ${PORT}`))