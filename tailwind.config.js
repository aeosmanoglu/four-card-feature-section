/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Poppins', 'sans-serif'],
            },
            colors: {
                'red': '#EA5454',
                'cyan': '#44D3D2',
                'orange': '#FCAE4A',
                'blue': '#549EF2',
                'neutral': {
                    100: 'hsl(0, 0%, 98%)',
                    500: 'hsl(229, 6%, 66%)',
                    900: 'hsl(234, 12%, 34%)',
                },
            },
            boxShadow: {
                'card': '0px 15px 30px -11px hsla(229, 6%, 66%, 0.5)'
            }
        },
    },
    plugins: [],
}

