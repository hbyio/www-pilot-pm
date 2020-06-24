const defaultTheme = require('../../node_modules/tailwindcss/defaultTheme')
module.exports = {
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          "50": "#EDE7F6",
          "100": "#D1C4E9",
          "200": "#B39DDB",
          "300": "#9575CD",
          "400": "#7E57C2",
          "500": "#673AB7",
          "600": "#5E35B1",
          "700": "#512DA8",
          "800": "#4527A0",
          "900": "#311B92",
        }
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
}