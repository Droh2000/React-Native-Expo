import { Movie } from '@/infraestructure/interfaces/movie.interface';
import { View, Text, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import MoviePoster from './MoviePoster';
import { useRef } from 'react';

interface Props {
    // Como es un componente reutilizable se podra indicar cual es el titulo a mostrar
    title?: string;
    movies: Movie[];
    className?: string; // Para poder agregarle estilos
    loadNextPage?: () => void,
}

const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {

  // Como el evento de "onScroll" es muy ruidiso y emite muchos valores, hay que evitar llamarlo si hay algun tipo de procesamiento
  const isLoading = useRef(false);

  // Logica para detectar cuando movemos el FlatList
  // Este tipado lo sacamos al poner el cursor ensima del "event" en el onScroll del FlatList
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Si estamos cargando o mandando a llamar una accion evitamos que ejecute este metodo
    if( isLoading.current ) return;

    // Para Determinar el final del scroll ocupamos desestructurar esto
    // contentOffset:     Es la posicion en la que nos encontramos en el Scroll
    // layoutMeasurement: Es lo que vemos en pantalla
    // contentSize:       Este es el contenido de lo que tenemos
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    // Sacamos cuando llegamos al final o estamos cerca del final
    // usamos la X porque es un scroll horizontal el que tenemos no vertical, el 600 es para agregarle un marge extra antes de que llegue al final
    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    // Si no llegamos al final no hay nada que hacer
    if( !isEndReached ) return;

    // Si llegamos al final, evitamos que si vuelve a mover el scroll dispare todo este procedimiento
    isLoading.current = true;

    // Cargamos las siguientes peliculas, si tiene algun valor esta funcion la mandamos a llamar
    loadNextPage && loadNextPage();
  }

  return (
    // Lo agregamos aqui por si en el futuro queremos expandirlo, es mas facil lograrlo aqui
    <View className={ `${className}` }>
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
        // Tenemos un evento que es emitido cada vez que hacemos scroll en la lista (Este evento emite muchos valores)
        onScroll={ onScroll }
      />
    </View>
  )
}

export default MovieHorizontalList