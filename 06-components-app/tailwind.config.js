import { Colors } from './constants/Colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}", // Tambien en esta carpeta vamos a tener componentes que van a seguir los lineamientos de NeativnWind
    "./components/**/*.{js,jsx,ts,tsx}", // Si vemos que al aplicar los ClassName no hacen efecto tenemos que asegurarnos que este definido la ruta de la carpeta donde tenemos el archivos
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Podemos usar lo que ya sabemos de Tailwindcss para configurar el Tema
      // Aqui configuramos los temas donde hacemos referencia a nuestro archivo de colores de 'constanst/Colors'
      // creando estas propiedades
      colors: {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          background: Colors.light.background,
          text: Colors.light.text,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          background: Colors.dark.background,
          text: Colors.dark.text,
        }
      }
    },
  },
  plugins: [],
}