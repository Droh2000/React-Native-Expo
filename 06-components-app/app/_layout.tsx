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
import ThemedText from '@/presentation/shared/ThemedText';
import { allRoutes } from '@/constants/Routes';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';

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
    // En este punto ocupamos manejar el "background" "GestureHandlerRootView" porque cuando la aplicacion cargue usara este tema que esta basado
    // en el "useThemeColor", en lugar de usar ese Hook deberiamos determinar mediante el ThemeChangerProvider
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ThemeChangerProvider>
      {/* Aqui detecta el tema del OS, si es oscuro usa el objeto "DarkTheme" (Esto nos coloca cierta configuracion por defecto)
        El "DefaultTheme" toma el tema por defecto de RectNative*/}
      {/*<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>*/}
        {/* Usamos el color de fondo de acuerdo al tema 
            Definimos primero TEMA Light y luego si fuera Oscuro
            Aqui usamos nuestro componente personalizado ya con los Temas configurados, si queremos usar otro View solo llamamos este componente
            o en el caso de Text uamos el componente ThemedText (AQui tenemos todo el comportamiento del Text adaptado siempre al tema light o Dark)
        <ThemedView margin>
          <ThemedText type='semi-bold' className='mt-20'>Hola Mundo</ThemedText>
        </ThemedView>
        */}
        {/* Definicion de la Navegacion hacia cada una de las rutas en la carpeta "app" 
            Aqui en el Stack definimos el Header y color acorde, ademas aqui definimos los cambios 
            que queremos aplicarle a todas las pantallas
        */}
        <Stack
          screenOptions={{
            headerShadowVisible: false, // Para que no se muestre una linea que sale debajo del header
            // Para que tome el color del Tema Claro u Oscuro
            contentStyle: {
              backgroundColor: backgroundColor
            },
            headerStyle: {
              backgroundColor: backgroundColor
            }
          }}
        >
          {/*
              Esta es la primera pantalla que vamos a mostrar que esta dentro de la carpeta "app"
          */}
          <Stack.Screen
            name='index'
            // Opciones que puede tener por cada pantalla
            options={{
              title: '',
            }}
          />
          {/* Queremos iterar cada una de las pantallas que tenemos definidas en las constantes del archivo "Route.ts"
              al final tenemos "allRoutes"
          */}
          {
            allRoutes.map((route) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  title: route.title,
                  // Ocultar el Header en el apartado de los Slides porque ahi esta una flecha para regresarse
                  headerShown: !route.title.includes('Slides'),
                }}
              />
            ))
          }
        </Stack>
        <StatusBar style="auto" />
      {/*</ThemeProvider>*/}
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
