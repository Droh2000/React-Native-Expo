import MainSlideShow from '@/presentation/components/MainSlideShow';
import { useMovies } from '@/presentation/hooks/useMovies'
import { View, Text, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

    // Para que el contenido no salga de la pantalla del celular y se vea muy a la orilla usamos este componente
    // este elemento nos va a a dar la informacion de cuanto padding o cuanto margin tenemos que dar para no sacar el contenido de la pantalla
    const safeArea = useSafeAreaInsets();

    // El "nowPlayingQuery" tenemos mucha informacion, cuando estamos cargando, si hay error o si se esta volviendo a cargar
    const { nowPlayingQuery } = useMovies();

    // Implementacion de Loading para no mostrar la informacion hasta que ya la tengamos
    if( nowPlayingQuery.isLoading ){
        return (
            <View className='justify-center items-center flex'>
                {/* Hay varias configuracion que podemos cambiarle al loading */}
                <ActivityIndicator color='purple' size={40}/>
            </View>
        )
    }

    return (
        // Vemos que le damos un margin Top pero en el Style le damos el valor de acuerdo al componente importado
        <View className='mt-2' style={{ paddingTop: safeArea.top }}>
            {/* Le colocamos estilo aqui por nuestra estetica de la aplicacion */}
            <Text className='text-3xl font-bold px-4 mb-2'>HomeScreen</Text>

            {/* Carrusel de imagenes 
                Espera que le pasemos el listado de peliculas este lo sacamos de los datos obtenidos del API solo que pueden ser undefined
                en ese caso mandamos un arreglo vacio
            */}            
            <MainSlideShow movies={nowPlayingQuery.data ?? []}/>
        </View>
    )
}

export default HomeScreen;