/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'primary-yellow': 'hsl(47, 88%, 63%)',
                'neutral-white': 'hsl(0, 0%, 100%)',
                'neutral-grey': 'hsl(0, 0%, 50%)',
                'neutral-black': 'hsl(0, 0%, 7%)',
                'attribution-link': 'hsl(228, 45%, 44%)',
            },
            fontFamily: {
                figtree: ['Figtree', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
