import { Movie } from '@/infraestructure/interfaces/movie.interface'
import { useRef } from 'react';
import { View, Text, Dimensions, useWindowDimensions } from 'react-native'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePoster from './MoviePoster';

// Esto es lo que vamos a recibir
interface Props {
    movies: Movie[];
}

// Para que el carrusel tome todo el ancho posible 
// El problema es que si lo hacemos de esta forma es que obtenemos las dimenciones en el momento en el que se carga  la pantalla
// si la persona gira la pantalla o la mueve, estas dimenciones no cambiaran
// Esto solo es viable si la aplicacion no permita los cambios de pantalla
// Dimensions.get('screen').width;

const MainSlideShow = ({ movies }: Props) => {

    // El useRef lo requiere el componente del carrusel y por la documentacion de la libreria le pasamos el tipo de dato
    const ref = useRef<ICarouselInstance>(null);

    // Para que tome todo el ancho posible, donde si cambia la pantalla no habra problemas tenemo esta solucion
    const width = useWindowDimensions().width;

    return (
        <View className='h-[250px] w-full'>
            <Carousel
                ref={ ref }
                data={ movies } // Espera los datos de las peliculas
                renderItem = { ({ item }) => <MoviePoster id={item.id} poster={item.poster}/>}    // Esta es la manera en la que queremos renderizar el elemento, dentro obtenemos los elementos que renderizara
                width={ 200 } // Este es el grosor de las tarjetas internas en este caso es ese numero por el ancho en cada uno de los lados
                height={ 350 }// Este es el alto de la tarjeta
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
                mode='parallax' // darle un efecto que se muevan las tarjetas como hacia arriba
                // Podemos cambiar las propiedades de la animacion de arriba
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50
                }}
                defaultIndex={1}// Para que el carrusel empieze en esta tarjeta
            />
        </View>
    )
}

export default MainSlideShow