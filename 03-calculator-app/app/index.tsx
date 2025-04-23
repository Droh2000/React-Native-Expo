import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {
  
  const {
    formula,
    buildNumber
  } = useCalculator();

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

      {/* 
        Metemos los textos dentro del View que seria como una <li> en HTML
        y les aplicas estos estilos para que no esten muy pegados a la orilla

        Estos son los resultados donde se mostrara cuando se precione un numero de la calculador y el resultado
      */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText
          variant='h1'
        >
          { formula }
        </ThemeText>

        <ThemeText 
          variant='h2'
        >250
        </ThemeText>
      </View>

      {/* Estos son las filas de botones 
        Por la forma en la que son los botones, son un fuerte candidato para crearlos como un componente personalizado ya que se repite todo
        solo cambia el contenido y el color de fondo y solo uno el tamano

        Este estilo que le especificamos aqui es para poder colocar los elementos internamente 
      */}
      <View style={ globalStyles.row }>
        <CalculatorButton 
          label='C'
          blackText // Con solo mandarlo asi seria a tener la property como True
          color={ Colors.lightGray }
          onPress={ () => buildNumber('c') }
        />
        <CalculatorButton 
          label='+/-'
          blackText
          color={ Colors.lightGray }
          onPress={ () => buildNumber('+/-') }
        />
        <CalculatorButton 
          label='del'
          blackText
          color={ Colors.lightGray }
          onPress={ () => buildNumber('del') }
        />
        <CalculatorButton 
          label='÷'
          blackText
          color={ Colors.orange }
          onPress={ () => buildNumber('Divicion') }
        />
      </View>
      <View style={ globalStyles.row }>
        <CalculatorButton 
          label='7'
          onPress={ () => buildNumber('7') }
        />
        <CalculatorButton 
          label='8'
          onPress={ () => buildNumber('8') }
        />
        <CalculatorButton 
          label='9'
          onPress={ () => buildNumber('9') }
        />
        <CalculatorButton 
          label='X'
          blackText
          color={ Colors.orange }
          onPress={ () => buildNumber('X') }
        />
      </View>
      <View style={ globalStyles.row }>
        <CalculatorButton 
          label='4'
          onPress={ () => buildNumber('4') }
        />
        <CalculatorButton 
          label='5'
          onPress={ () => buildNumber('5') }
        />
        <CalculatorButton 
          label='6'
          onPress={ () => buildNumber('6') }
        />
        <CalculatorButton 
          label='-'
          blackText
          color={ Colors.orange }
          onPress={ () => buildNumber('-') }
        />
      </View>
      <View style={ globalStyles.row }>
        <CalculatorButton 
          label='1'
          onPress={ () => buildNumber('1') }
        />
        <CalculatorButton 
          label='2'
          onPress={ () => buildNumber('2') }
        />
        <CalculatorButton 
          label='3'
          onPress={ () => buildNumber('3') }
        />
        <CalculatorButton 
          label='+'
          blackText
          color={ Colors.orange }
          onPress={ () => buildNumber('+') }
        />
      </View>
      <View style={ globalStyles.row }>
        <CalculatorButton 
          label='0'
          doubleSize // Este boton tiene un tamano diferent al resto
          onPress={ () => buildNumber('0') }
        />
        <CalculatorButton 
          label='.'
          onPress={ () => buildNumber('.') }
        />
        <CalculatorButton 
          label='='
          blackText
          color={ Colors.orange }
          onPress={ () => console.log('=') }
        />
      </View>

    </View>
  )
}

// Lo importante en el sistema de rutas es que sea una exportacion por defecto
// este es el componente que se va a mostrar cuando se mande a llamar por defecto dependiendo de la ruta donde estemos
export default CalculatorApp

// Asi como esta ya lo creamos pero tenemos que indicarle al _layout en que lugar queremos renderizar estos hijos
// ya que por el momento no se muestra en ninguna parte