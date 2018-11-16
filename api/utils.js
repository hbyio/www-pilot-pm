const readdir = require('readdir-enhanced')
const moment = require('moment')
const path = require('path')
const _ = require('lodash')
const matter = require("gray-matter")
const fs = require('fs')


var generateRoutes = function (){
    let routes = []
    let files = readdir.sync(`./content`, {filter: '**/*.md',deep: true})
    for(file of files){
        let route = {}
        let pathInfo = path.parse(file); // Returns: { root: '/', dir: '/home/user/dir', base: 'file.txt', ext: '.txt', name: 'file' }
        let fileUrl = path.join(pathInfo.dir, pathInfo.name)
        routes.push(fileUrl)
    }
    return routes
}

var generateSitemap = function (){
    let routes = []
    let locales = ['fr', 'en']
    for (let i in locales ){
        let locale = locales[i]
        let files = readdir.sync(`./content/${locale}`, {filter: '**/*.md',deep: true})
    
        for(file of files){
           let route = {}
           let pathInfo = path.parse(file); // Returns: { root: '/', dir: '/home/user/dir', base: 'file.txt', ext: '.txt', name: 'file' }
           let fileUrl = path.join('content',locale, file)
           let fileMatter = matter(fs.readFileSync(fileUrl, 'utf8'))

           // /some/dir/index.md => url  = '/some/dir'
           // /some/dir/faq.md => url  = '/some/dir/faq'
           if(pathInfo.name === 'index'){
               route.url = pathInfo.dir
           }else{
               route.url = path.join(pathInfo.dir, pathInfo.name)
           }
           route.inSitemap = _.isBoolean(fileMatter.data.sitemapShow) ? fileMatter.data.sitemapShow : true
           route.isDraft = _.isBoolean(fileMatter.data.draft) ? fileMatter.data.draft : false
           route.changefreq = fileMatter.data.sitemapChangeFreq ||  'daily'
           route.priority = fileMatter.data.sitemapPriority || 1
           route.lastmodISO = fileMatter.data.date || moment().format()
           route.links = [
               { lang: 'en', url: route.url, }, // TODO warning : we are creating links here for content that may not exists in the other language. Check if content exists in other folder
               { lang: 'fr', url: path.join('fr', route.url), },
           ]
           
           if(route.inSitemap === false){
               break
           }

           routes.push(route)
        }
    }

    return routes
}


module.exports = {
    generateRoutes : generateRoutes,
    generateSitemap : generateSitemap
};