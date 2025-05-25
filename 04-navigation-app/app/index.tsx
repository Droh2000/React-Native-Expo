import { Link, Redirect } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'
import ProductsScreen from './drawer/tabs/(stack)/products'

// Este es nuestro punto de entrada en la aplicacion
const index = () => {
  // Despues de la instalacion de TailwindCss podemos usar el ClassName para definirle los estilos
  // El SafeAreaView nos va a permitir a nosotros automaticamente determinar cual es la posicion que queremos dejar si hay
  // un elemento que no se puede renderizar su contenido
  /*return (
    // Lo importante a saber aqui cuando configuramos algo personalizado en Tailwind.config.js es que solo con llamar la palabra que le dimos a la propiedad
    // lo podemos llamar con las otras propiedades de Tailwind bg, text, etc
    /*<SafeAreaView>
      <View className="mt-6 mx-2.5">
          Despues de instaladas las fuentes tenemos varias formas de usarlas
          Una es por medios de los estilos (Esta es mas latosa)
          Otra es como ya lo tenemos en NaitiveWind solo lo especificamos con font-NombreDeFuente (En minusculas)
        
        <Text className="text-3xl" style={{ fontFamily: 'WorkSans-Black' }}>Hola Mundo</Text>
          Aqui usamos la fuente personalizada 
        <Text className="text-2xl font-work-black text-primary">Hola Mundo</Text>
        <Text className="text-xl font-work-light text-secundary">Hola Mundo</Text>
        <Text className="text-xl font-work-medium text-secundary-100">Hola Mundo</Text>
        <Text className="text-xl font-work-medium text-tertiary">Hola Mundo</Text>

         Aqui vamos a configurar para llegar a otra pantalla
          Con el componente Link de expoRouter podemos hacer navegacion sin ningun hook ni nada
          En este caso queremos ir al componente de Productos

          Con esto tenemos en la pantalla para darle click al enlace y nos manda a la ruta pero al ingresar esta nos sale con el mensaje
          de "Unmatched Route", si pasa eso tenemos que hacer un FullRefresh para que tome los cmabios
        
        <Link href="/products">
          Productos
        </Link>
      </View>
    </SafeAreaView>
  )*/

  // Como este index puede que solo sirva para redireccionar a otras pantallas 
  // Lo que queremos hacer es que tan pronto se lanze la aplicacion queremos que se mueva a la pantalla de productos 
  // Asi hacemos una redireccion (Al declrar la ruta nos puede decir que hay un error de sintaxis pero en este caso hay que cerrar todo o borrar la carpeta de .expo por el cache)
  // return <Redirect href="/home"/>

  // Ahora apuntamos a la pagina de los Tabs
  //return <Redirect href="/tabs"/>

  // Para ver como se ve el menu de hamburguesa
  return <Redirect href="/drawer"/>
}

export default index
// Cualquier archivo que pongamos dentro de la carpeta "app" va a terminar siendo una pantalla
// esto seria un componente que ocuparia todo el tamano de la pantalla del dispositivo