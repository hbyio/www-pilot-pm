const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
    // Warning /!\ Purge is called only with NODE_ENV variable set to 'production'
    purge: {
        enabled: process.env.HUGO_ENVIRONMENT === "production",
        mode: "all",
        preserveHtmlElements: false,
        content: ["./layouts/**/*.html", "./content/**/*.md", "./layouts/**/*.svg"],
        // or content: [ './hugo_stats.json' ], if you write stats at build (https://github.com/bep/hugo-starter-tailwind-basic/blob/master/tailwind.config.js)
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
