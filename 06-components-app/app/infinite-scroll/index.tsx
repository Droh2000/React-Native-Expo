import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

// Elementos que queremos mostrar en el Scroll
interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <Image
      source={{ uri: `https://picsum.photos/id/${ number }/500/400` }}
      style={{
        height: 400,
        width: "100%"
      }}
    />
  )
}

const InfiniteScrollScreen = () => {

  // Con el Hook es como vamos a renderizar los datos
  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
  
  // Vamos a cambiar el color del Loading que sale en Andorid
  const primaryColor = useThemeColor({}, 'primary');

  // Con esta funcion vamos a ir creando dinamicamente mas elementos en el arreglo
  const loadMore = () => {
    // Este nos va a estar obteniendo nuevo elementos sumando el valor desde el ultimo valor del arreglo
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      // Juntamos los dos arreglos
      setNumbers([...numbers, ...newArray])
    }, 3000);
  }

  return (
    <ThemedView>
      {/* El elemento mas comun para hacer un Scroll infinito es un FlatList porque nos permite renderizar los elementos bajo demanda 
          para que solo los elementos que se ven en pantalla son cargados y cuando salen se limpia para ahorrar memoria
      */}
      <FlatList
        data={ numbers }
        // Asi es como renderizamos los Items
        renderItem={ 
          ({ item }) => 
            /*<ThemedText className="h-[250px]">{ item }</ThemedText>*/
            <ListItem number={item}/>
        }
        // Cuando llegamos al final queremos lanzar la funcion para cargar mas elementos
        onEndReached={ loadMore }
        // La idea del infiniteScroll es que cargemos elementos cuando se llega al final pero nosotros no queremos que el usuario llegue al final del listado
        // para que empieze a cargar los elementos, lo mejor es cuando el usuario este cerca de llegar al final pero no al mero final
        onEndReachedThreshold={ 0.6 } // Cuando este el 60% del Scroll empeize a cargar los siguientes elementos
        // Indicamos a los usuarios que estamos cargando mas datos
        ListFooterComponent={ () => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={primaryColor}/>
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;
