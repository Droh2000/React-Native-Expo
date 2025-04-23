import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import { Text, Pressable } from 'react-native'
import * as Haptics from 'expo-haptics';
 
 // Como el texto es personalidao lo podemos recibir como un Children como una propeetie
 // Tambien el color y la forma es lo que varia para cada boton por eso las definimos aqui
 interface Props{
    label: string,
    color?: string,
    blackText?: boolean, // algunos tendran el texto en negro y por defecto esta en blanco
    doubleSize?: boolean,
    onPress: () => void,
 }

 // Componente personalizado para crear a partir de aqui los demas botones de la calculadora 
 const CalculatorButton = ({ 
    label, 
    color = Colors.darkGray, // Al ser valores opcionales le declaramos valores por defecto
    blackText = false, 
    doubleSize= false,
    onPress 
}: Props) => {
   return (
    <Pressable 
        // En lugar de mandar los estilos directamante vamos a mandar una funcion que nos va a regresar inmediatamente el objeto de los estilos
        // Asi podemos desestructurar el pressed con el cual podemos darle el efecto que se preciono el boton
        style={ ({ pressed }) => ({
            ...globalStyles.button,
            backgroundColor: color, // Le pasamos el color que recibimos en el Prop
            opacity: pressed ? 0.8 : 1, // Darle el efecto que se toco el boton
            width: doubleSize ? 180 : 80, // Si es True le cambiamos el tamano a 180
        })}
        onPress={ () => {
            // Este es el efecto de darle vibracion al tocar el boton
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            onPress();
        } }
    >
        <Text 
            style={{ 
                ...globalStyles.buttonText, // Esparcimos todas las properties que tenfa el global Styles para lo que pongamos despues lo sobrescriba
                color: blackText ? 'black' : 'white', // Si es True sera negro sino blanco

            }}
        >{ label }</Text>
    </Pressable>
   )
 }
 
 export default CalculatorButton