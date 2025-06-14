import { Platform, Pressable, Switch, View } from 'react-native'
import ThemedText from './ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    text?: string,
    value: boolean,
    className?: string,
    onValueChange: (value: boolean) => void
}

// Detectar si estamos corriendo la aplicacion en dispositivo de Android o IPhone
// para darle una personalizacion segun el OS
const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({ text, value, className, onValueChange }:Props) => {

    // Establecerle un color segun el si esta en android
    // ponemos primero {} para no cambiar el tema Dark/Light y solo mandamos el color primario
    const switchActiveColor = useThemeColor({}, 'primary');

    return (
        // La idea de meter el Switch dentro de un Prsesable es que podamos clickear en cualquier parte del Card que creamos y cambiar el Switch
        <Pressable
            className={`flex flex-row mx-2 items-center justify-center active:opacity-80 ${ className }`}
            // Para poder cambiar el switch (Esto se ve bien en Android en IOS la animacion hace que sea vea feo) 
            onPress={ () => onValueChange(!value) }
        >
            {
                // Si tenemos un Texto, lo mostramos y si no colocamos un View para que el Switch siempre salga a la orilla de la pantalla
                text ? <ThemedText type='h2'>{ text }</ThemedText> : <View/>
            }
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={ isAndroid ? switchActiveColor : ''}
                // Estas propiedades son para cambiar el color de fondo del Switch  si esta activo o no
                // ios_backgroundColor={ value ? 'green' : 'red' } -> Esto es solo para IOS
                trackColor={{
                    false: 'grey', // Si el switch esta en false se pondra de este color
                    true: switchActiveColor,
                }}
            />
        </Pressable>
    )
}

export default ThemedSwitch