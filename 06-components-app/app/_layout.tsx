import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
// Este componente viene de una carpeta de nuestro proyecto
import { useColorScheme } from '@/hooks/useColorScheme';
// En la documenacion oficial viene con un ./ pero eso nos dara error y le tenemos que agregar ../
import "../global.css";
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/presentation/shared/ThemedView';

// Usuamente vamos a querer estas funcionales y mantenerlas 
export default function RootLayout() {
  // Queremos que el fondo sea basando en los colores definidos en "constants/Colors.ts" pero como tiene que ser Light o Dark no vamos a usar los colores directamente por ese archivo
  // sino que vamos a usar el Hook que Expo nos creo por nosotros "useThemeColor"
  // Este es nuestro fondo de color basado en el Tema del dispositivo
  const backgroundColor = useThemeColor(
    // Estos son los colores que queremos asignar a Light/Dark que en este caso no queremos ninguno
    {},
    // Esta es la pieza de nuestro objeto de colores que queremos tomar
    'background' 
  );
  // Aqui espera a que carge las fuentes para evitar que se vea un cambio repentino de fuentes feas a las establecidas
  // El "useColorScheme" nos va a decir el Tema del sistema operativo (Dark o Light)
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    // Con este nos aseguramos evitar unos problemas con los Scroll
    // Ademas le asignamos el color de fondo de la aplicacion segun el tema del dispositivo
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      {/* Aqui detecta el tema del OS, si es oscuro usa el objeto "DarkTheme" (Esto nos coloca cierta configuracion por defecto)
        El "DefaultTheme" toma el tema por defecto de RectNative*/}
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* Usamos el color de fondo de acuerdo al tema 
            Definimos primero TEMA Light y luego si fuera Oscuro
            Aqui usamos nuestro componente personalizado ya con los Temas configurados, ski queremos usar otro View solo llamamos este componente
            
        */}
        <ThemedView>
          <Text 
            // Ejemplo del uso de los Colores que definimos en la configuracion de "tailwind.config.js"
            // "text-Nombre(LIGHT)Propiedad TEMA:text-Nombre(DARK)Propiedad"
            className='mt-10 text-3xl text-light-primary dark:text-dark-primary'
          >Hola Mundo</Text>
        </ThemedView>
        {/*<Stack>
        </Stack>*/}
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
