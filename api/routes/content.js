const matter = require("gray-matter");
const { Router } = require('express')
const fs = require('fs')
const path = require('path');

const router = Router()

/* GET markdown files listing. */
router.get('/section', function (req, res, next) {
  const path = req.query.path
  const lang = req.query.lang

  let mdFiles = fs.readdirSync(`./content/${lang}/${path}`)

  let menu = []
  
  mdFiles.forEach(mdfile => {
    let rawmd = fs.readFileSync(`./content/${lang}/${path}/${mdfile}`, 'utf8')
    menu.push(matter(rawmd).data)
  });

  res.json(menu)
})


/* GET markdown files listing. */
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

module.exports = router