const plugin = require("tailwindcss/plugin");
module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};