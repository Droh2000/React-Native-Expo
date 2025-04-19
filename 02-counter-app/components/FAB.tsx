import { Text, Pressable, StyleSheet } from 'react-native'

// Las props son los datos personanlizados que tendra cuando se usado el componente
interface Props{
    label: string,
    onPress?: () => void,
    onLongPress?: () => void,
    // Esta propiedad sera para darle el usuario la posibilidad de cambiar la posicion del boton
    position?: 'left' | 'right';
}

export default function FAB({
    label,
    onPress,
    onLongPress,
    position = 'right'
}: Props) {
    
    /* Este componente es como el Button, todo el contenido siempre que estara dentro del componente Text */
    return (
    <Pressable
        style={[ styles.floatingButton, position === 'right' ? styles.possitionRight : styles.possitionLeft ]}
        // Evento click
        onPress={ onPress }
        // Cuando dejamos precionado el boton por mucho tiempo
        onLongPress={ onLongPress }
        >
        <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4,
    },
    possitionRight:{
        right: 20,
    },
    possitionLeft:{
        left: 20,
    }
})