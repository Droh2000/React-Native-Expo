import { View, Text } from 'react-native'

// Este es nuestro punto de entrada en la aplicacion
const index = () => {
  // Despues de la instalacion de TailwindCss podemos usar el ClassName para definirle los estilos
  return (
    <View className="mt-10">
      <Text className="text-3xl font-bold text-blue-500">index</Text>
    </View>
  )
}

export default index
// Cualquier archivo que pongamos dentro de la carpeta "app" va a terminar siendo una pantalla
// esto seria un componente que ocuparia todo el tamano de la pantalla del dispositivo