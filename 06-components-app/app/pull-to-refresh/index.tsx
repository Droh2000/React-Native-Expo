import { View, Text, ScrollView, RefreshControl } from 'react-native';
import ThemeText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

// Esto funciona para cualquier tipo de lista o que tenga un elemento Scroll
const PullToRefreshScreen = () => {

  // Cambiar colores del Icono de loading
  // Entre {} es para que no sobrescriba el dark y time
  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({
    // Especificamos los colores para cada uno de los temas
    dark: 'black',
    light: 'white',
  }, 'background');

  // El "RefreshControl" necesita que le pasemos informacion de cuando ocultarse y cuando mostrarse, esto lo controlamos mediante algun tipo de estado
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Con esta funcion determinamos hasta cuando mostrar el icono de Refreshing
  const onRefresh = async () => {
    setIsRefreshing(true);// Lo pasamos en True para mostrar el icono de Loading

    // Despues de 3 segundo lo ocultamos (Si esta en false no sale)
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  }

  return (
    <ScrollView
      // Para usar el "PullToRefreshScreen" tenemos que agregar algun tipo de control
      refreshControl={
        <RefreshControl 
          refreshing={ isRefreshing }
          onRefresh = { onRefresh }
          // Esto en IOS no cambia, solo en Android
          colors = {[primaryColor]}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView>
        <ThemeText>PullToRefreshScreen</ThemeText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
