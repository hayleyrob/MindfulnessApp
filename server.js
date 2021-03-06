const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

require('mongoose').connect('mongodb://localhost/mindmaster_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(3001, () => console.log('The server is running')))
  .catch(err => console.error(err))