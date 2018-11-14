
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

// // Require API routes
const contents = require('./routes/content')

// // Import API Routes
app.use(contents)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}