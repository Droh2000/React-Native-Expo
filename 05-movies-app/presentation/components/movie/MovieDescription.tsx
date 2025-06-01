import { Formatter } from '@/config/helpers/formatter';
import { CompleteMovie } from '@/infraestructure/interfaces/movie.interface'
import { View, Text } from 'react-native'

interface Props{
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className='mx-5'>

      {/* Por defecto el Flex en ReactNative es Columna por eso lo colocamos en row*/}
      <View className='flex flex-row'>
        <Text>{movie.rating}</Text>
        <Text> - { movie.genres.join(', ') }</Text>
      </View>

      <Text className='font-bold mt-5'>
        Sinopsis
      </Text>
      <Text className='font-normal mt-2'>
        { movie.description }
      </Text>

      {/* Nos creamos una funcion Helper para mostrar correctamente las cifras de dinero */}
      <Text className='font-bold mt-2 text-2xl'>{ Formatter.currency(movie.budget) }</Text>
    </View>
  )
}

export default MovieDescription