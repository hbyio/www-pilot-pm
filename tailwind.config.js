const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
    // Warning /!\ Purge is called only with NODE_ENV variable set to 'production'
    purge: {
        mode: "all",
        preserveHtmlElements: false,
        content: ["./layouts/**/*.html", "./content/**/*.md", "./layouts/**/*.svg"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brand: colors.blueGray,
                gray: colors.coolGray,
                accent: colors.amber,
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
