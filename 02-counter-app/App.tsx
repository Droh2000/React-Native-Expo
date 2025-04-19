// Hay algunos componentes que vienen de react-native, otros vienen de Expo, o de paquetes de terceros
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import FAB from './components/FAB';

export default function App() {

  // Uso de componentes de React
  const [count, setCount] = useState(10);

  // El uso es como utilizar etiquetas HTML pero ahora con otro nombre
  return (
    <View style={styles.container}> {/* Esto es como un DIV en HTML, si queremos mas estilos ponemos todo eso entre [] separados por coma */} 
      <Text style={styles.textHuge}>{ count }</Text> {/* Esto es como un SPAN */}

      {/* Separamos la logica en componentes para ser reutilizables */}
      <FAB 
        label="+1"
        onPress={ () => setCount(count + 1)}
        onLongPress={ () => setCount(0) }
        position='right'
      />

      <FAB 
        label="Reset"
        onPress={ () => setCount(0)}
        position='left'
      />

      {/* Este es otro tipo de boton que al precionarlo nos da un efecto de opacidad, pero el de arriba es mas felxible 
      <TouchableOpacity>
        <Text>+1</Text>
      </TouchableOpacity>
      */}

      <StatusBar style="auto" />
    </View>
  );
}

// Con "StyleSheet" creamos codigo que se ve como en CSS, solo que aqui no se separan las palabras con guion
// sino que se capitaliza la siguiente palabra
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Definimos otros estilos
  textHuge: {
    fontSize: 120,
    fontWeight: '100',
  },
});
