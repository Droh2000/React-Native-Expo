import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

// Ya creadas nuestras paginas (Favorites y Home) las vamos a convertir en TABS
const TabsLayout = () => {
  return (
     // El Tab que este acivo se mostrar del color indicado, las propiedades que pongamos aqui se aplicaran en todos los tabs
     <Tabs screenOptions={{ 
        tabBarActiveTintColor: 'blue', 
        // Asi ocultamos el Header que se ve mal porque ya configuramos nosotros el Stack
        headerShown: false,
        // Aqui tenemos muchas opciones para poder personalizar a nuestro gusto
        // en este caso le cambiamos el color de fondo de la barra de Tabs
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveBackgroundColor: 'white',
      }}> 
        {/*Queremos que en lugar de mostrar el HomeScreen queremos mostrar el contenido de la carpeta (stack), Esto implica mover el FileSystem
        asi que movimos la carpeta "(stack)" dentro de la carpeta tabs, asi automaticamente veremos que nuestra applicacion ya nos detecta el nuevo TAB
        pero hay que configurarlo aqui*/}
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="apple" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Home/index" // Nuestra pagina que se mostraran en este Tab
        options={{
          title: 'Home Screen',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index" // Esta es la otra ruta que mostrar el TAb
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heartbeat" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout