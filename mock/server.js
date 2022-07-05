const express = require('express')
const cors = require('cors')
require('colors')

require('dotenv').config()

const { subs, threads } = require('./data')

const server = express()

server.use(cors())
server.use(express.json())

server.get('/', (_, res) => res.send('Mock is running!'))

// Subs
server.get('/subs', (_, res) => {
  try {
    return res.json(subs)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
})

server.get('/subs/:id', (req, res) => {
  try {
    const { id } = req.params

    if (!id) return res.status(400).send('Need Sub Id!')

    const sub = subs.find((sub) => sub.id === id)

    if (!sub) return res.status(404).send('Sub not found!')

    return res.status(200).json(sub)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
})

// Threads
server.get('/threads', (req, res) => {
  try {
    const { sub } = req.query

    if (!sub) return res.json(threads)

    return res.json(threads.filter((thread) => thread.sub === sub))
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
})

server.get('/threads/:id', (req, res) => {
  try {
    const { id } = req.params

    if (!id) return res.status(400).send('Need Thread Id!')

    const thread = threads.find((thread) => thread.id === id)

    if (!thread) return res.status(404).send('Thread not found!')

    return res.status(200).json(thread)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
})

server.listen(4000, () => {
  console.log(`Mock server is running at port 4000`.green)
})
