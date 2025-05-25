import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'

// Despues de meter la carpeta (STACK) dentro de la carpeta TABS tenedremos que arreglar la navegacion de las pantallas internas para poder accesarlas
const HomeScreen = () => {

  // Para tener acceso al Drawer
  const navigation = useNavigation();

  // Si queremos abrir el Drawer
  const onToggleDrawer = () => {
    // Para abrir lo hacemos con el metodo "dispatch"
    navigation.dispatch( DrawerActions.toggleDrawer );
  }

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        {/* Lo colocamos aqui para poder mirar temporalmente como se mira el boton*/}
        <CustomButton
          className='mb-2'
          color='primary'   
          // Hacemos la navegacion desde el boton
          // Con .push colocamos una pantalla sobre la pagina actual
          // Vemos que despues de poner entre parentesis los directorios, ahora las rutas se simplificaron mucho
          onPress={ () => router.push('/products') } // Arreglamos los enlaces despues de mover la carpeta tabs dentro de drawer  
        >Producto</CustomButton>

        <CustomButton
          className='mb-2'
          color='secondary'
          onPress={ () => router.push('/profile') }   
        >Profile</CustomButton> 

        <CustomButton
          className='mb-2'
          color='tertiary'
          onPress={ () => router.push('/settings') }   
        >Settings</CustomButton> 

        {/* Si queremos trabajar ese CustomBotton como si fuera un Link 
          Solo le colocamos el asChild para que funcione correctamente (Si usamos esto en versiones 
          viejas tendremos Warnings)
          En este Commit arreglamos el codigo para quitar ese Warining
        */}
        <Link href="/products" asChild>
          <CustomButton variant='text-only' className='mb-10' color='primary'>Productos</CustomButton>
        </Link>

        <CustomButton
          onPress={onToggleDrawer}
        >Abrir Menu</CustomButton>

        {/*<Link className="mb-5" href="/products">
          Productos{' '}
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil{' '}
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes{' '}
        </Link>*/}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen