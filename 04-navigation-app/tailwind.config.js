/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    // Aqui es donde los estilos de Tailwind se van a aplicar (En cualquiera de estos directorios)
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Definimos nuestros colores personalizados
      colors: {
        primary: '#49129C',
        // La forma de especificarlo asi, es para que al usarlo podamos darle variaciones en el tono segun el numero especificado aqui
        secundary: {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266',
        }
      },
      tertiary: '#EF2967',
      // Aqui configuramos las fuentes que descargamos para usarlas como si fueran clases
      // Le pasamos los nombres que queremos usar en las clases de Tailwwind (Nombre de la clase)
      // Entre las llaves le ponemos el nombre del archivo
      fontFamily: {
        //La siguiente fuente que especificamos seria la que tome si no se encuentra la que especificamos
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}