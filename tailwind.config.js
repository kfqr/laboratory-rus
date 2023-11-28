/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./src/frezer.html", "./src/index.html", "./src/js/*.js"],
    theme: {
        listStyleType: {
            none: "none",
            decimal: "decimal",
            square: "square",
        },
        screens: {
            "3xl": "1920px",
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                sans: ["ristretto", ...defaultTheme.fontFamily.sans],
                copy: ["Arial, Helvetica, sans-serif"],
            },
            colors: {
                primary: {
                    50: "#fff0f0",
                    100: "#ffdede",
                    200: "#ffc3c3",
                    300: "#ff9999",
                    400: "#ff5f5e",
                    500: "#ff2d2c",
                    600: "#f62221",
                    700: "#cf0706",
                    800: "#aa0b0a",
                    900: "#8d100f",
                    950: "#4d0202",
                },
            },
        },
    },
    safelist: ["ya-gray-pane", "text-center", "block", "text-gray-400", "mx-auto", "font-sans", "text-base", "ml-[18px]"],
    plugins: [],
};
