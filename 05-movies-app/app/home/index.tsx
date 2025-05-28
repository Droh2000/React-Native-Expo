import { useMovies } from '@/presentation/hooks/useMovies'
import { View, Text } from 'react-native'

const HomeScreen = () => {

    // El "nowPlayingQuery" tenemos mucha informacion, cuando estamos cargando, si hay error o si se esta volviendo a cargar
    const { nowPlayingQuery } = useMovies();

    return (
        <View>
            <Text>HomeScreen</Text>

            <Text>
                { JSON.stringify( nowPlayingQuery.data ) }
            </Text>
        </View>
    )
}

export default HomeScreen