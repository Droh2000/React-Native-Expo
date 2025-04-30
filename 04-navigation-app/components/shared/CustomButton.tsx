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

    // Establecemos que podamos definir diferentes tipos de botones
    variant?: 'contained' | 'text-only'

    // Para poder mandarle los atributos
    className?: string
}

const CustomButton = React.forwardRef(({ 
    children, 
    color = 'primary', 
    onPress, 
    onLongPress,
    variant = 'contained', 
    className
}: Props, ref: React.Ref<View>) => {
    // Como no podemos meterle directamente en el ClassName como Color-${color}
    // tenemos que hacerlo asi, donde de un objeto tomamos por el nombre de la clave, el color indicado en las props
    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color];

    // Esto es para que tambien respete los colores
    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary'
    }[color];

    // En este caso solo queremos mostrar el Text
    if( variant === 'text-only' ){
        return (
            <Pressable 
                className={`p-3 ${className}`}
                onPress = {onPress}
                onLongPress = {onLongPress}
                ref={ref}
            >
                <Text className={`text-center ${textColor} font-work-medium`}>{ children }</Text>
            </Pressable>
          )      
    }

  return (
    <Pressable 
        // El active es para darle el efecto de cuando se preciono el boton
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
        // Estos son los parametros que queremos que se utilizen cuando se aplique el boton
        onPress = {onPress}
        onLongPress = {onLongPress}
        ref={ref}
    >
        <Text className='text-white text-center font-work-medium'>{ children }</Text>
    </Pressable>
  )
});

export default CustomButton