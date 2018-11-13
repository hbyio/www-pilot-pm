const matter = require("gray-matter");
const { Router } = require('express')
const fs = require('fs')

const router = Router()

// Mock Users
const files = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/content', function (req, res, next) {
  
  const path = req.query.path

  let data = fs.readFileSync(`./content/${path}`, 'utf8')
  //let bodyresp = fs.readdirSync(`./content/resources`)

  res.json(data)
  // if (id >= 0 && id < files.length) {
  //   res.json(files[id])
  // } else {
  //   res.sendStatus(404)
  // }
})

// /* GET user by ID. */
// router.get('/content/:path', function (req, res, next) {

// })

module.exports = router