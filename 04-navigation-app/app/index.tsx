import { View, Text, SafeAreaView } from 'react-native'

// Este es nuestro punto de entrada en la aplicacion
const index = () => {
  // Despues de la instalacion de TailwindCss podemos usar el ClassName para definirle los estilos
  // El SafeAreaView nos va a permitir a nosotros automaticamente determinar cual es la posicion que queremos dejar si hay
  // un elemento que no se puede renderizar su contenido
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        {/* Despues de instaladas las fuentes tenemos varias formas de usarlas
          Una es por medios de los estilos (Esta es mas latosa)
          Otra es como ya lo tenemos en NaitiveWind solo lo especificamos con font-NombreDeFuente (En minusculas)
        */}
        <Text className="text-3xl" style={{ fontFamily: 'WorkSans-Black' }}>Hola Mundo</Text>
        <Text className="text-2xl font-work-black">Hola Mundo</Text>
        <Text className="text-xl font-work-light">Hola Mundo</Text>
        <Text className="text-xl font-work-medium">Hola Mundo</Text>
      </View>
    </SafeAreaView>
  )
}

export default index
// Cualquier archivo que pongamos dentro de la carpeta "app" va a terminar siendo una pantalla
// esto seria un componente que ocuparia todo el tamano de la pantalla del dispositivo