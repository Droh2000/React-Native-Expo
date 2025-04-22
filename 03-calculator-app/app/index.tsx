import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'

const CalculatorApp = () => {

  /* 
    Aqui vamos a tener dos textos que van a tener ciertas diferencias 
    Ademas vemos que de codigo tenems que la mayoria lo ocupa los estilos globales lo que ya lo hace dificil de leer
    desde aqui se ve la necesidad de tener que crear elementos personalizados porque todabia falta la configuracion de la Fuente personalizada.
    y luego puede que requieramos poner mas propiedades, otras configuraciones como:
      - numberOfLines={1} -> Para indicar que si al texto se le termina el espacion se salte a otra linea
      - adjustFontSizeToFit -> Para que ajuste el tamano de la fuente a la cantidad de lineas que especificamos
  */
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text 
        style={ globalStyles.mainResult }
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        50 x 50
      </Text>
      <Text style={ globalStyles.subResult }>250</Text>
    </View>
  )
}

// Lo importante en el sistema de rutas es que sea una exportacion por defecto
// este es el componente que se va a mostrar cuando se mande a llamar por defecto dependiendo de la ruta donde estemos
export default CalculatorApp

// Asi como esta ya lo creamos pero tenemos que indicarle al _layout en que lugar queremos renderizar estos hijos
// ya que por el momento no se muestra en ninguna parte