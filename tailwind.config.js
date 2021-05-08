module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: {
                DEFAULT: '#e8e6ea',
            },
            green: {
                DEFAULT: '#8cb27f',
                dark: '#55725d',
                light: '#c6d9bf'
            },
            blue: {
                DEFAULT: '#073f5a',
                dark: '#04202d',
                light: '#39657b'
            },
            primary: {
                DEFAULT: '#1f1c17',
            },
            warning: {
                DEFAULT: '#D1711C',
                dark: '#7d4411',
                light: '#e3aa77'
            }
        },
        extend: {
            boxShadow: {
                default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
            },
            fontSize: {
                '2rem': '2rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};