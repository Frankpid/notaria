const express = require('express')
const next = require('next')
const Config = require('./config')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = 3000 || Config.PORT
const URL = Config.URL

console.log(PORT)
    
app.prepare()
.then(() => {
  const server = express()
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on ${URL}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})