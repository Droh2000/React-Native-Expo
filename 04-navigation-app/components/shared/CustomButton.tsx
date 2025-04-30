import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

// Este es un boton donde queremos reutilizarlo segun las nesecidades y los parametros que se pasan
// para que tome las propiedades que definamos pero mantenga las propiedades que vienene por defecto
// ocupamos expandir las props
interface Props extends PressableProps{
    children: string, // Es un string porque seria el texto del boton que queremos mostrar
    // Estos son los diferentes tipos de color que puede aceptar el boton
    // Si queremos meter clases CSS de Tailwind no podremos ponerle las propeidades computadas como ${} tiene que ser directamente en String normal 
    // para que la tome en cuenta
    color?: 'primary' | 'secondary' | 'tertiary',
}

const CustomButton = ({ children, color = 'primary', onPress, onLongPress }: Props) => {
    // Como no podemos meterle directamente en el ClassName como Color-${color}
    // tenemos que hacerlo asi, donde de un objeto tomamos por el nombre de la clave, el color indicado en las props
    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color];

  return (
    <Pressable 
        // El active es para darle el efecto de cuando se preciono el boton
        className={`p-3 rounded-md ${btnColor} active:opacity-90`}
        // Estos son los parametros que queremos que se utilizen cuando se aplique el boton
        onPress = {onPress}
        onLongPress = {onLongPress}
    >
        <Text className='text-white text-center'>{ children }</Text>
    </Pressable>
  )
}

export default CustomButton