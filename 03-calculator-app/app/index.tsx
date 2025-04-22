import { View, Text } from 'react-native'
import React from 'react'

const CalculatorApp = () => {
  return (
    <View>
      <Text>CalculatorApp</Text>
    </View>
  )
}

// Lo importante en el sistema de rutas es que sea una exportacion por defecto
// este es el componente que se va a mostrar cuando se mande a llamar por defecto dependiendo de la ruta donde estemos
export default CalculatorApp

// Asi como esta ya lo creamos pero tenemos que indicarle al _layout en que lugar queremos renderizar estos hijos
// ya que por el momento no se muestra en ninguna parte