


// module.exports = function (req, res) {
//   // req is the Node.js http request object
//   //console.log(req.headers)
//   console.log(req.url)

//   // res is the Node.js http response object
//   let data = require('fs').readFileSync('./content/resources/faq.md', 'utf8')

//   let bodyData = JSON.stringify(matter(data))
//   res.writeHead(200, {'content-type':'application/json'});
//   res.write(bodyData)
//   res.end()

//   // next is a function to call to invoke the next middleware
//   // Don't forget to call next at the end if your middleware is not an endpoint!
//   // next()
  
// }


const express = require('express')

// Create express instnace
const app = express()

// // Require API routes
const contents = require('./routes/content')

// // Import API Routes
app.use(contents)


// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}