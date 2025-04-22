// rnfe + TAB
import { View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font';
// Vemos que sale un "@" porque en el tsconfig tenemos en "paths" creada un Alias 
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';

// El nombre no es problema, le podemos poner el que nosotros queramos
// Cuando el nombre del archivo sea _layout quiere decir que esta esperando un componente por defecto
// que normalmente se le pone "RootLayout" para indicar que este es el componentes donde todas las paginas
// que vengan en esta estructura de fileSistem y sub carpetas van a pasar por este _layout
// Este es el lugar ideal para colocar el contextAPI
export default function RootLayout() {

  // Vamos a usar una fuente que ya esta en la carpeta de "assets/fonts"
  const [loaded] = useFonts({
    // Le damos un nombre que sera la referencia de uso y la ruta donde se encuentra
    // Al hacerlo de esta manera, primero se carga la aplicacion, luego se carga la fuente y esto no es una bune practica 
    // por eso se desestructura "loaded" para indicar cuando ya cargamos la fuente
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Si la fuente no esta cargado (Aqui podriamos mostrar un SplashScreen)
  if(!loaded){
    return null;
  }

  // Realmente lo unico que va a tener este archivo es la configuracion del fondo que deberia de aplicarse en todas las paginas
  // Para que se estire la pantalla le colocamos el flex
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      {/* Aqui vamos a renderizar los componentes hijos que creamos 
          Este Slot le dice a Expo que cualquier ruta hija lo renderize ahi
          Como nos encontramos en el / y no hemos especificado otra ruta entonces por defecto busca el "index"
          de la carpeta (Entonces el contenido del "index.tsx" lo renderiza en donde dice SLOT)
          Asi con esto podemos colocar arriba y abajo un contenido que salga todo el tiempo

          El contenido de nuestra pagina saldra dentro de este SLOT
      */}
      <Slot/>
      
      {/* Como el fondo de nuestra app siempre sera negro, queremos que siempre detecte los componentes lo ponga en blanco */}
      <StatusBar style='light'/>
    </View>
  )
}