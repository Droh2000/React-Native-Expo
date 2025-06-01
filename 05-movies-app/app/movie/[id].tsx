// Creamos la pagina para cuando hacemos click en la imagen de la pelicula nos muestre esta pagina con sus detalles
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

// Podemos llegar facilmente a la pantalla creada "MovieScreen" porque estamos dentro de un Stack en el "_layout.tsx"
// con esa configuracion podemos llegar a otra pantalla sin problemas (En "MoviePoster.tsx" implementamos la redireccion)
const MovieScreen = () => {

  // Tomamos el ID para saber cual pelicula mostrar
  const { id } = useLocalSearchParams();

  // Obtenemos para el manejo de las peticiones con TanStack
  const { movieQuery } = useMovie(+id);

  // Comprobamos si todavia no tenemos la pelicula cargada
  if( movieQuery.isLoading ){
    return (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='mb-4'>Espere Por favor....</Text>
        <ActivityIndicator color="purple" size={30}/>
      </View>
    )
  }

  return (
    <ScrollView>
      <Text>{ movieQuery.data?.title ?? 'No Tiene Titulo' }</Text>
    </ScrollView>
  );
}

export default MovieScreen;