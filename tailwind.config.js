module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: {
                DEFAULT: '#ffffff',
            },
            green: {
                light: '#6fcf97',
                DEFAULT: '#27AE60',
                dark: '#219653',
                darker: '#1e874b',
            },
            red: {
                light: '#FFEAEA',
                DEFAULT: '#EB5757',
                dark: '#C20D0D',
            },
            blue: {
                DEFAULT: '#073f5a',
                light: '#51798c',
                dark: '#052c3f',
                darker: '#031924',
                lighter: '#9cb2bd'
            },
            orange: {
                light: '#FFEBDA',
                DEFAULT: '#F66A0A',
                dark: '#A04100',
            },
            grey: {
                light: '#C0C0C0',
                DEFAULT: '#696969',
                dark: '#202020'
            },
            primary: {
                DEFAULT: '#24292E',
            },
            warning: {
                DEFAULT: '#D1711C',
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
