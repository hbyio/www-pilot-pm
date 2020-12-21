module.exports = {
    plugins: {
        "postcss-import": {
            path: ["assets/css"],
        },
        tailwindcss: {},
        autoprefixer: {},
    },
}

// ...process.env.HUGO_ENVIRONMENT === 'production'
//   ? [purgecss]
//   : []
