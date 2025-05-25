import { View, Text } from 'react-native'
import { Drawer } from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/CustomDrawer';

const DrawerLayout = () => {
  return <Drawer
    // Cuando llamemos el DrawerContent nos va a ignorar todas los Drawer.Screen ya que las toma como una configuracion visual de las opciones del drawer
    // No es que hayan desaparecidos, simplemente no estan renderizadas, con esto tenemos el ponder de poner otro componente
    // Debajo de esto requerimos que nos salgan las opciones que habiamos definido, cuando mandamos asi como vemos, solo el nombre del componente
    // estamos mandando por referencia las Properties que se las estamos mandando al componente
    drawerContent={ CustomDrawer }

    screenOptions={{
      headerShown: false, // Ocultamos el Header que por defecto nos esta dando el Drawer (El problema es que al descativarlo nos ocultara el icono del menu)
      overlayColor: 'rgba(0,0,0,4)', // Esto es para que cuando ingresemos al menu la parte del fondo tome este color que indiquemos
      drawerActiveTintColor: 'indigo', // El color que tendra la opcion del menu seleccionada
      headerShadowVisible: false, // Para quitar una linea que se ve arriba
      // Igual tenemos muchas mas opciones
      headerBackgroundContainerStyle: {
        backgroundColor: 'white'
      }
    }}
  >
    <Drawer.Screen
      name="user/index"
      options={{
      drawerLabel: 'User',
      title: 'Users',
      // Aqui tenemos opciones indivuales, con las cuales podemos agregar un icono a cada opcion
      // De esta funcion podemos desestructurar dos propiedades (Asi mantenemos las propiedades con los mismos atributos)
        drawerIcon: ({color, size}) => (
          <Ionicons name='person-circle-outline' size={size} color={color}/>
        )
      }}
      />
      {/* Aqui es donde queremos que se muestren los Tabs */}
      <Drawer.Screen
        name="(tabs)" // Como dentro de la carpeta no tenemos ningun archivo Home solo especifimos el nombre no seguido del Slash
        options={{
        drawerLabel: 'Tabs + Stack',
        title: 'Tabs + Stack',
          drawerIcon: ({color, size}) => (
            <Ionicons name='albums-outline' size={size} color={color}/>
          )
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedules',
          drawerIcon: ({color, size}) => (
            <Ionicons name='calendar-outline' size={size} color={color}/>
          )
        }}
      />
    </Drawer>
}

export default DrawerLayout;