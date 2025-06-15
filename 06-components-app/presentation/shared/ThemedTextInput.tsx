import { View, Text, TextInputProps } from 'react-native'
import { TextInput } from 'react-native';

// Como por cada input hay muchas consideraciones relacionada por cada uno segun la informacion a manipular y adaptarse al tema de la aplicacion
// asi que nos creamos un CustomHook (Esta seria la personalizacion que requerimos)
interface Props extends TextInputProps{
    className?: string;
}

const ThemedTextInput = ({ className, ...rest }:Props) => {
  return (
    <TextInput
        className={`py-4 px-2 text-black dark:text-white ${className}`}
        placeholderTextColor="grey" // Sin importar el tema siempre sera gris
        {...rest}
    />
  )
}

export default ThemedTextInput