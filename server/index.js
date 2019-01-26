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

app.get(`/api/inventory`, ctrl.getInventory)
app.post(`/api/inventory`, ctrl.create)


const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => console.log(`We are live at port: ${SERVER_PORT}`))