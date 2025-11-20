/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'neon-lime': '#ccff00',
        'electric-violet': '#8b5cf6',
        'holographic-blue': '#00d4ff',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neon': '0 0 10px rgba(204, 255, 0, 0.5), 0 0 20px rgba(204, 255, 0, 0.3)',
      },
      backgroundImage: {
        'noise': "url('/noise.png')", // We will need a noise texture
      }
    },
  },
  plugins: [],
}
