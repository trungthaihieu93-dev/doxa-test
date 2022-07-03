const express = require('express')
const cors = require('cors')
require('colors')

require('dotenv').config()

const server = express()

server.use(cors())
server.use(express.json())

server.get('/', (_, res) => res.send('Mock is running!'))

server.get('/search', (_, res) => {})

server.get('/best', (_, res) => {})

server.get('/hot', (_, res) => {})

server.listen(4000, () => {
  console.log(`Mock server is running at port 4000`.green)
})
