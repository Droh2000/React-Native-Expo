// Al ser para una interface le ponemos "type" para que sea mas ligero de procesarse
import { globalStyles } from '@/styles/global-styles'
import { Text, type TextProps } from 'react-native'

// Para aceptar las properties por defecto de los textos
// esta propiedad por defecto ya nos incluye tambien el Children por tanto no es necesario especificarlo
interface Props extends TextProps{
    //children: string,
    // Para evitar mandar el "globalStyles.PROPERTY", le creamos estos elementos porque estos
    // son los delementos principales que tenemos especificados en la pantalla de la aplicacion
    // Con estos sabemos que estilos aplicar y cuales colores aplicar
    variant?: 'h1' | 'h2',
    // Aqui tambien podriamos definir que fuente especificar, entre otras cosas

}

// Para tomar todas las properties y pasarselas al texto interno, especificamos el operador ...rest
// Le asignamos un valor porque sino lo pasa el usuario obtendremos un NULL
const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
  return (
      <Text
        style={[
            { color:'white', fontFamily: 'SpaceMono' },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult,
        ]}
        // Tambien especificamos estas lineas aqui para no tener que estarlas definiendo en cada uno de los componentes 
        // porque se van a repetir en muchos lugares
        numberOfLines={1}
        adjustsFontSizeToFit
        { ...rest }
      >{ children }</Text>
  )
}

export default ThemeText