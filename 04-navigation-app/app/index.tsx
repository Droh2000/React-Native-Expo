import { View, Text, SafeAreaView } from 'react-native'

// Este es nuestro punto de entrada en la aplicacion
const index = () => {
  // Despues de la instalacion de TailwindCss podemos usar el ClassName para definirle los estilos
  // El SafeAreaView nos va a permitir a nosotros automaticamente determinar cual es la posicion que queremos dejar si hay
  // un elemento que no se puede renderizar su contenido
  return (
    // Lo importante a saber aqui cuando configuramos algo personalizado en Tailwind.config.js es que solo con llamar la palabra que le dimos a la propiedad
    // lo podemos llamar con las otras propiedades de Tailwind bg, text, etc
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        {/* Despues de instaladas las fuentes tenemos varias formas de usarlas
          Una es por medios de los estilos (Esta es mas latosa)
          Otra es como ya lo tenemos en NaitiveWind solo lo especificamos con font-NombreDeFuente (En minusculas)
        */}
        <Text className="text-3xl" style={{ fontFamily: 'WorkSans-Black' }}>Hola Mundo</Text>
        {/* Aqui usamos la fuente personalizada */}
        <Text className="text-2xl font-work-black text-primary">Hola Mundo</Text>
        <Text className="text-xl font-work-light text-secundary">Hola Mundo</Text>
        <Text className="text-xl font-work-medium text-secundary-100">Hola Mundo</Text>
        <Text className="text-xl font-work-medium text-tertiary">Hola Mundo</Text>
      </View>
    </SafeAreaView>
  )
}

export default index
// Cualquier archivo que pongamos dentro de la carpeta "app" va a terminar siendo una pantalla
// esto seria un componente que ocuparia todo el tamano de la pantalla del dispositivo