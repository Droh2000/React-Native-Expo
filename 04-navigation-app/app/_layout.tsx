import { Slot, SplashScreen, Stack } from "expo-router"
import "./global.css"
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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

  // Con expo por defecto tenemos el StackNavigation, con esto tenemos una navegacion mas natural de celular donde en la parte de arriba indica
  // en que pantalla estamos y donde tambien sale la flecha para regresarse hacia atras, si queremos configurar esto, lo podemos hacer en cada una de las pantallas
  // o crearnos una configuracion de un Stack
  // Aqui con el Slot le decimos que lo que sea que este en su hijo que lo renderize aqui
  //return <Slot/>;

  // Para agregar el menu Drawer tenemos que envolver donde se esta renderizando nuestra app en el componente
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot/>
    </GestureHandlerRootView>
  );

  //return <Stack/>; // Al cambiarlo ya tenemos el StackNavigation
  // esta linea de arriba la comentamos porque establecemos el Slot en el Layout de la carpeta (stack)
}

export default RootLayout