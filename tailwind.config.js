/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  options: {
    ignored: [/DumpStack\.log\.tmp$/],  // Ignore le fichier verrouillé
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], /** Une fois ceci configuré, Tailwind appliquera Poppins à tous les éléments utilisant la classe font-sans. */
      },
      colors: {
        bronze: {
          400: '#CD7F32', // Couleur pour le bronze
        },
      },
    },
  },
  plugins: [],
}
