// Componente de ThemedText donde podremos que los textos se les aplique las clases respectivas del Tema Light o Dark
import { View, Text, TextProps } from 'react-native'

// Tipos de fuentes
type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';
/*
    Ejemplo de Uso segun si es alguno de los tipos de arriba:
        normal -> font-normal
        h1 -> text-3xl
        h2 -> text-xl
        semi-bold -> font-bold
        link ->  font-normal underline
*/

// En las Props heredamos de las props del componente Text
interface Props extends TextProps {
    // Aqui colocamos las props que queremos sobrescribir
    className?: string,
    type?: TextType,
}

// Todas las properties la esparcimos para asignarselos al texto
const ThemedText = ({ className, type = 'normal', children,...rest }: Props) => {
    // Ejemplo del uso de los Colores que definimos en la configuracion de "tailwind.config.js"
    // "text-Nombre(LIGHT)Propiedad TEMA:text-Nombre(DARK)Propiedad"
    //  className='mt-10 text-3xl text-light-primary dark:text-dark-primary' -> Asi era como se definia antes
    return <Text 
        // Implementamos las clases usando TailwindCSS con el argumento ClassName juntandolos todo por un espacio
        className={[
            'text-light-primary dark:text-dark-primary', // Aqui le adaptamos para cambiar de Tema Light o Dark
            type === 'normal' ? 'font-normal' :
            type === 'h1' ? 'text-3xl' :
            type === 'h2' ? 'text-xl' :
            type === 'semi-bold' ? 'font-bold' :
            type === 'link' ? 'font-normal underline' : '',
            className
        ].join(' ')}

    { ...rest }>{ children }</Text>
    // El Childrent tambien lo podemos tomar de forma automatica si cerramos automaticamente la etiqueta como <Text />
}

export default ThemedText