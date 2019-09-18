const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const { PORT = 3000 } = process.env


const app = express()

app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '..', 'public')))

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})
