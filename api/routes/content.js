const matter = require("gray-matter");
const { Router } = require('express')
const fs = require('fs')
const path = require('path');
const _ = require('lodash')
const readdir = require('readdir-enhanced')

const router = Router()

/* GET markdown files listing. */
router.get('/routes', function (req, res, next) {

  //let mdFiles = fs.readdirSync(`./content`)
  let menu = []
  readdir('./content', {filter: '**/*.md',deep: true}, function(err, files) {
    
    files.forEach(file => {
        let fileCuts = path.parse(file);
        // Returns:
        // { root: '/',
        //   dir: '/home/user/dir',
        //   base: 'file.txt',
        //   ext: '.txt',
        //   name: 'file' }
        let menuItem = path.join(fileCuts.dir, fileCuts.name);
        menu.push(menuItem)
    });
    res.json(menu)
  });
  
})


/* GET markdown files listing. */
router.get('/section', function (req, res, next) {
  const path = req.query.path
  const lang = req.query.lang
  const order = req.query.order || null
  const slice = req.query.slice || null

  let mdFiles = fs.readdirSync(`./content/${lang}/${path}`)

  let menu = []
 
  mdFiles.forEach(mdfile => {
    let rawmd = fs.readFileSync(`./content/${lang}/${path}/${mdfile}`, 'utf8')
    menu.push(matter(rawmd).data)
  });

  if(order != null){
    menu = _.sortBy(menu, order);
  }
  if(slice != null){
    menu = _.slice(menu, 0, parseInt(slice));
  }
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