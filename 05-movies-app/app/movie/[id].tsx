// Creamos la pagina para cuando hacemos click en la imagen de la pelicula nos muestre esta pagina con sus detalles
import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

// Podemos llegar facilmente a la pantalla creada "MovieScreen" porque estamos dentro de un Stack en el "_layout.tsx"
// con esa configuracion podemos llegar a otra pantalla sin problemas (En "MoviePoster.tsx" implementamos la redireccion)
const MovieScreen = () => {

  // Tomamos el ID para saber cual pelicula mostrar
  const { id } = useLocalSearchParams();

  // Solo lo llamamos aqui para ver que si se esta haciendo la peticion, le pusimos el "+" para que nos tranforme el ID en string
  getMovieByIdAction(+id);

  return (
    <View>

    </View>
  );
}

export default MovieScreen;