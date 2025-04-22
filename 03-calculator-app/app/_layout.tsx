// rnfe + TAB
import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

// El nombre no es problema, le podemos poner el que nosotros queramos
// Cuando el nombre del archivo sea _layout quiere decir que esta esperando un componente por defecto
// que normalmente se le pone "RootLayout" para indicar que este es el componentes donde todas las paginas
// que vengan en esta estructura de fileSistem y sub carpetas van a pasar por este _layout
// Este es el lugar ideal para colocar el contextAPI
export default function RootLayout() {
  return (
    <View>
      <Text>RootLayout</Text>

      {/* Aqui vamos a renderizar los componentes hijos que creamos 
          Este Slot le dice a Expo que cualquier ruta hija lo renderize ahi
          Como nos encontramos en el / y no hemos especificado otra ruta entonces por defecto busca el "index"
          de la carpeta (Entonces el contenido del "index.tsx" lo renderiza en donde dice SLOT)
          Asi con esto podemos colocar arriba y abajo un contenido que salga todo el tiempo
      */}
      <Slot/>

    </View>
  )
}