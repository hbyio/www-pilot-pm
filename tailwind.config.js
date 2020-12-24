const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
    //     purge: {
    //         enabled: true,
    //         content: ["./layouts/**/*.html", "./content/**/*.md"],
    //     },
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
