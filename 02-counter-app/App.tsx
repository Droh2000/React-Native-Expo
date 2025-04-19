// Hay algunos componentes que vienen de react-native, otros vienen de Expo, o de paquetes de terceros
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  // Uso de componentes de React
  const [count, setCount] = useState(10);

  return (
    // El uso es como utilizar etiquetas HTML pero ahora con otro nombre
    <View style={styles.container}> {/* Esto es como un DIV en HTML, si queremos mas estilos ponemos todo eso entre [] separados por coma */} 
      <Text style={styles.textHuge}>{ count }</Text> {/* Esto es como un SPAN */}

      {/* Este componente es como el Button, todo el contenido siempre que estara dentro del componente Text */}
      <Pressable
        style={ styles.floatingButton }
        // Evento click
        onPress={() => setCount(count + 1)}
        // Cuando dejamos precionado el boton por mucho tiempo
        onLongPress={() => setCount(0)}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>+1</Text>
      </Pressable>

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
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  }
});
