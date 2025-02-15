const colors = require("tailwindcss/colors");

module.exports = {
    theme: {
        extend: {},
    },
    variants: {
        fill: ["hover", "focus"], // this line does the trick
    },
    plugins: [],
};
