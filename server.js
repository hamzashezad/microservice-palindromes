const express = require('express')
const path = require('path')
const helmet = require('helmet')

const app = express()
const p = new (require('./src/Palindrome'))

app.use(helmet())
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/check/:str', (request, response) => {
    response.send(p.check(request.params.str))
})

const listener = app.listen(3000, () => {
    console.log(`Listening.\nhttp://localhost:${listener.address().port}`)
})
