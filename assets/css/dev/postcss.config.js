module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('tailwindcss')('./assets/css/tailwind.config.dev.js'),    
    require('autoprefixer'),    
  ]
}