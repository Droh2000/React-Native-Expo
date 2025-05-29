import { Movie } from '@/infraestructure/interfaces/movie.interface';
import { View, Text, FlatList } from 'react-native'
import MoviePoster from './MoviePoster';

interface Props {
    // Como es un componente reutilizable se podra indicar cual es el titulo a mostrar
    title?: string;
    movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View>
        {   // Consultamos si la variable tenemos el titulo para mostrarlo sino no lo mostramos
            title && 
            <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
        }
      {/* Componente para mostrar una lista de elementos */}
      <FlatList
        horizontal // Esta es una propiedad True pero al ser de este tipo solo podemos especificar el nombre
        data={ movies }
        // Aqui reutilizamos el componente
        renderItem={({item}) => <MoviePoster id={ item.id } poster={ item.poster } smallPoster/>}
        // Este es para indicarle a React cuando un elemento cambia en base a su ID
        keyExtractor={(item) => `${ item.id }`}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MovieHorizontalList