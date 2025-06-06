import { Movie } from '@/infraestructure/interfaces/movie.interface';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

    // Para que el contenido no salga de la pantalla del celular y se vea muy a la orilla usamos este componente
    // este elemento nos va a a dar la informacion de cuanto padding o cuanto margin tenemos que dar para no sacar el contenido de la pantalla
    const safeArea = useSafeAreaInsets();

    // El "nowPlayingQuery" tenemos mucha informacion, cuando estamos cargando, si hay error o si se esta volviendo a cargar
    // Del "popularQuery" tenemos las peliculas mas populares
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

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
        // Envolvemos todo nuestro componente en el ScrollView para que cuando exceda el contenido de la pantalla podamos hacer para abajo
        <ScrollView>
            {/* Vemos que le damos un margin Top pero en el Style le damos el valor de acuerdo al componente importado
                Ademas le agregamos para que pueda hacer Scroll mas abajo sino solo llega hasta donde hay contenido
            */}
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                {/* Le colocamos estilo aqui por nuestra estetica de la aplicacion */}
                <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

                {/* Carrusel de imagenes 
                    Espera que le pasemos el listado de peliculas este lo sacamos de los datos obtenidos del API solo que pueden ser undefined
                    en ese caso mandamos un arreglo vacio
                */}            
                <MainSlideShow movies={nowPlayingQuery.data ?? []}/>

                {/*
                    Aqui vamos a colocar las peliculas populares
                */}
                <MovieHorizontalList
                    title='Populares'
                    movies={ popularQuery.data ?? [] }
                    className='mb-5'
                />

                <MovieHorizontalList
                    title='Mejor Calificadas'
                    // Esto cambio y ahora es un arreglo de arrglo, asi que de los datos tomamos la paginas y aplanamos ese arreglo
                    movies={ topRatedQuery.data?.pages.flat() ?? [] }
                    className='mb-5'
                    // Ocupamos mandar a llamar las siguientes peliculas (La siguiente pagina ya esta determinada por el TopRatedQuery)
                    loadNextPage={ topRatedQuery.fetchNextPage }
                />

                <MovieHorizontalList
                    title='Proximamente en Cines'
                    movies={ upcomingQuery.data ?? [] }
                    className='mb-5'
                />
            </View>
        </ScrollView>
    )
}

export default HomeScreen;