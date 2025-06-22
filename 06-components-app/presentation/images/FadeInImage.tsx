import { View, ActivityIndicator, StyleProp, Animated, ImageStyle } from 'react-native'
import { useState } from 'react';
import { useAnimation } from '@/hooks/useAnimation';

// Propiedades que requerimos para mostrar la imagen
interface Props {
    uri: string,
    // Esto es si queremos modificar estilos de la imagen, en lugar de classname usamos el Style
    style: StyleProp<ImageStyle>,
}

// En IOS pasa que las imagenes se muestran todas de golpe y no tienen esa transicion de Fade
const FadeInImage = ({ uri, style }: Props) => {

    // Para saber cuando estamos cargando para quitar el Loading y mostrar la imagen
    const [isLoading, setIsLoading] = useState(true);

    // Agregar el Efecto de FadeIn
    const { animatedOpacity, fadeIn } = useAnimation();

    return (
        // En el Style agregamos para acomodar un simbolo de carga
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                // Si estamos en true mostramos el Loading
                isLoading && (
                    <ActivityIndicator
                        style={{ position: 'absolute' }}
                        color="grey"
                        size={30}
                    />
                )
            
            // Para animar un elemento en ReactNative se mandaa a llamar Animated.NombreComponente
            }
            <Animated.Image
                source={{ uri }}
                style={ [style, { opacity: animatedOpacity }] } // Queremos animar su opacidad
                // Queremos ocultar el spiner si ya tenemos cargada la imagen, aqui tenemos esta funcion cuando el recurso es cargado
                onLoadEnd={ () => {
                    // Cuando termine de cargarse el recurso
                    fadeIn({}); // Le mandamos un objeto vacio para que use la configuracion por defecto
                    setIsLoading(false);
                }}
            />
        </View>
    )
}

export default FadeInImage