const readdir = require('readdir-enhanced')
const moment = require('moment')
const path = require('path')
const _ = require('lodash')
const matter = require("gray-matter")
const fs = require('fs')


var routeBuilder = function (locale, file){


    let route = {}
    let pathInfo = path.parse(file); // Returns: { root: '/', dir: '/home/user/dir', base: 'file.txt', ext: '.txt', name: 'file' }
    let fileUrl = path.join('content',locale, file)

    let fileMatter = matter(fs.readFileSync(fileUrl, 'utf8'))

    if(pathInfo.name === 'index'){
        // If we find an index file in folder, the route is the dir of the file
        route.url = pathInfo.dir
    }else{
        // Else the route is the dir and name of file
        route.url = path.join(pathInfo.dir, pathInfo.name)
    }
    route.sitemapShow = _.isBoolean(fileMatter.data.sitemapShow) ? fileMatter.data.sitemapShow : true
    route.changefreq = fileMatter.data.sitemapChangeFreq ||  'daily'
    route.priority = fileMatter.data.sitemapPriority || 1
    route.lastmodISO = fileMatter.data.date || moment().format()
    route.links = [
        { lang: 'en', url: path.join('content', 'en', route.url), },
        { lang: 'fr', url: path.join('content', 'fr', route.url), },
    ]
    if(route.sitemapShow === false){
        return
    }
    return route
}

var generateRoutes = function (){
    // If mode is 'sitemap' we filter out contents that do not want to appear in sitemap
    // If mode is 'menu' or null we let these content appear
    // if(typeof baseurl === 'undefined')  {
    //     throw new Error("baseurl must be defined")
    //     return
    // }
    let routes = []
    let locales = ['fr', 'en']
    for (let i in locales ){
        console.log(locales[i])
        let files = readdir.sync(`./content/${locales[i]}`, {filter: '**/*.md',deep: true})
        console.log(files)
        files.forEach(file => {
            console.log(file)
            console.log('other', locales[i])
            let route = routeBuilder(locales[i], file)
            routes.push(route)
        });
    }

    return routes
}


module.exports = {
    routeBuilder : routeBuilder,
    generateRoutes : generateRoutes
};