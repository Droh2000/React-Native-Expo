/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Este componente nos va a permitir crear componentes (Estos los podemos ver en la carpeta Components)
// donde podemos detectar si estamos en modo Dark o Light, nos pide cual es el color del texto pudiendo sobrescribir
// (Esto en el caso del componente del texto) los colores segun el SO
export function useThemeColor(
  // Esta sintazis es el Tipado de TS
  props: { light?: string; dark?: string },
  // Aqui nos esta diciendo que son dos llaves (Estos los toma de la carpeta "constants" del archivo "Colors.ts")
  // osea que solo estas llaves son permitidas y tienen que existir en "Colors"
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';// Toma el Thema si es Dark o Light
  const colorFromProps = props[theme];

  if (colorFromProps) { // Si hay algun color establecido
    return colorFromProps;
  } else {
    // Si no toma la paleta de colores con el "theme" que es la llave del objeto "Colors" y el nombre del color que le pasamos
    return Colors[theme][colorName];
  }
}
