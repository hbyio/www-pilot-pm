
const express = require('express')
const cors = require('cors')

const app = express()


var corsOptions = {
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

// // Require API routes
const contents = require('./routes/content')

// // Import API Routes
app.use(contents)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}