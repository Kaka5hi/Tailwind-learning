/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                blogCard: "6px 6px rgba(0, 0, 0, 1)",
            },
        },
        fontFamily: {
            youngSerif: ["Young Serif", "serif"],
            outfit: ["Outfit", "serif"],
            inter: ["Inter", "serif"],
            figtree: ["Figtree", "serif"],
            wordSans: ["Work Sans", "sans-serif"],
            hankenGrotesk: ["Hanken Grotesk", "sans-serif"],
        },
    },
    plugins: [],
};
