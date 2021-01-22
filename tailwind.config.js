const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
    // Warning /!\ Purge is called only with NODE_ENV variable set to 'production'
    purge: {
        enabled: process.env.HUGO_ENV === "production",
        mode: "all",
        preserveHtmlElements: false,
        content: ["./hugo_stats.json"],
        // or content: [ './hugo_stats.json' ], if you write stats at build (https://github.com/bep/hugo-starter-tailwind-basic/blob/master/tailwind.config.js)
        options: {
            //whitelist: [ 'pl-1', 'pl-3' ],
            defaultExtractor: (content) => {
                let els = JSON.parse(content).htmlElements
                els = els.tags.concat(els.classes, els.ids)
                return els
            },
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // https://tailwindcss.com/docs/customizing-colors
            colors: {
                brand: colors.blueGray,
                gray: colors.coolGray,
                accent: colors.amber,
            },
            // typography: {
            //     xl: {
            //         css: {
            //             lineHeight: "1.7rem",
            //         },
            //     },
            // },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
