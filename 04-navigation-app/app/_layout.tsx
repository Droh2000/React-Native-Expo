import { Slot, SplashScreen } from "expo-router"
import "./global.css"
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

// Para mostrar un mensaje de carga hasta que las fuentes esten cargadas
SplashScreen.preventAutoHideAsync();

// Todos los componentes van a pasar por este RootLayour, por eso retornamos el Slot del ExporRouter
const RootLayout = () => {

  // Cargamos las fuentes personalizadas, donde le damos el nombre y la ruta donde esta el archivo
  const [ fontsLoaded, error ] = useFonts({
    'WorkSans-Black':  require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light':  require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  });

  // Ya cuando las fuentes esten cargadas quitamos el mensaje de carga
  useEffect(() => {
    if( error ) throw error;
    
    if( fontsLoaded ) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // No queremos mostrar nada hasta que tengamos las fuentes cargados
  // En este caso si no tenemos las fuentes pero no hay error entonces no regresamos nada
  if( !fontsLoaded && !error ) return null;

  return <Slot/>;
}

export default RootLayout