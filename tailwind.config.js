module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                lg: "1124px",
                xl: "1124px",
                "2xl": "1124px"
            }
        },
        fontFamily: {
            Montserrat: ["Montserrat, sans-serif"]
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                lg: "1124px",
                xl: "1124px",
                "2xl": "1124px"
            }
        },
        extend: {
            colors: {
                "landing-birumuda": "#ecf5ff",
                "landing-birutua": "#004a99",
                "landing-biru": "#007bff",
                "landing-putih": "#ecf5ff",
                "landing-hitam": "#283d50",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}