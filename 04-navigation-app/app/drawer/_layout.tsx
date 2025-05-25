import { View, Text } from 'react-native'
import { Drawer } from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons';

const DrawerLayout = () => {
  return <Drawer
    screenOptions={{
      overlayColor: 'rgba(0,0,0,4)', // Esto es para que cuando ingresemos al menu la parte del fondo tome este color que indiquemos
      drawerActiveTintColor: 'indigo', // El color que tendra la opcion del menu seleccionada
      headerShadowVisible: false, // Para quitar una linea que se ve arriba
    }}
  >
    <Drawer>
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
  </Drawer>
}

export default DrawerLayout;