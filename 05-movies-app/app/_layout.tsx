import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import "../global.css";
import { View, Text } from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Stack } from "expo-router";

// Aqui vamos a estar almacenando todo el resultado de las peticiones, el estado del mismo, 
// es como si creamos un gestor de estado que se va a encargar de todas las tareas asyncronas
const queryClient = new QueryClient();

// Mediante el "QueryClientProvider" vamos a poder tomarlo, analizar como esta, hacer actualizaciones o mantener en un estado
const RootLayout = () => {
  return (
     <QueryClientProvider client={queryClient}>
      <Stack
        // Ocultamos el Header
        screenOptions={{
          headerShown: false
        }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout