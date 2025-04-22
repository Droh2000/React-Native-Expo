import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'

const CalculatorApp = () => {

  /* 
    Aqui vamos a tener dos textos que van a tener ciertas diferencias 
    Ademas vemos que de codigo tenems que la mayoria lo ocupa los estilos globales lo que ya lo hace dificil de leer
    desde aqui se ve la necesidad de tener que crear elementos personalizados porque todabia falta la configuracion de la Fuente personalizada.
    y luego puede que requieramos poner mas propiedades, otras configuraciones como:
      - numberOfLines={1} -> Para indicar que si al texto se le termina el espacion se salte a otra linea
      - adjustFontSizeToFit -> Para que ajuste el tamano de la fuente a la cantidad de lineas que especificamos

    Asi que nos creamos un componentes personalizado que nos permita la expancion y personalizacion
    A este componentes le requerimos pasar las properties y es pecificar el contenido
    Pero si queremos personalizar el numero de lineas y el Ajustador de la fuente, esas serian otras properties que tendriamos que especificarle
    entonces no queremos espcificar uno por uno porque ademas hay muchas propiedades, sino que estas propieades ya esten de manera implicita
    es por eso que en la interface Props heredamos de esa clase para obtenerlas todas
  */
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText
        variant='h1'
      >
        50 x 50
      </ThemeText>

      <ThemeText 
        variant='h2'
      >250
      </ThemeText>
    </View>
  )
}

// Lo importante en el sistema de rutas es que sea una exportacion por defecto
// este es el componente que se va a mostrar cuando se mande a llamar por defecto dependiendo de la ruta donde estemos
export default CalculatorApp

// Asi como esta ya lo creamos pero tenemos que indicarle al _layout en que lugar queremos renderizar estos hijos
// ya que por el momento no se muestra en ninguna parte