import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
// Este componente viene de una carpeta de nuestro proyecto
import { useColorScheme } from '@/hooks/useColorScheme';

// Usuamente vamos a querer estas funcionales y mantenerlas 
export default function RootLayout() {
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
    // Aqui detecta el tema del OS, si es oscuro usa el objeto "DarkTheme" (Esto nos coloca cierta configuracion por defecto)
    // El "DefaultTheme" toma el tema por defecto de RectNative
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
