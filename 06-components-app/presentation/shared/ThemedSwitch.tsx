import { Pressable, Switch, View } from 'react-native'
import ThemedText from './ThemedText'

interface Props {
    text?: string,
    value: boolean,
    className?: string,
    onValueChange: (value: boolean) => void
}

const ThemedSwitch = ({ text, value, className, onValueChange }:Props) => {
    return (
        // La idea de meter el Switch dentro de un Prsesable es que podamos clickear en cualquier parte del Card que creamos y cambiar el Switch
        <Pressable
            className={`flex flex-row items-center justify-center active:opacity-80 ${ className }`}
        >
            {
                // Si tenemos un Texto, lo mostramos y si no colocamos un View para que el Switch siempre salga a la orilla de la pantalla
                text ? <ThemedText type='h2'>{ text }</ThemedText> : <View/>
            }
            <Switch
                value={value}
                onValueChange={onValueChange}
            />
        </Pressable>
    )
}

export default ThemedSwitch