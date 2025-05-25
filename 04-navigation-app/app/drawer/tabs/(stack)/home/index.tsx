import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

// Despues de meter la carpeta (STACK) dentro de la carpeta TABS tenedremos que arreglar la navegacion de las pantallas internas para poder accesarlas
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        {/* Lo colocamos aqui para poder mirar temporalmente como se mira el boton*/}
        <CustomButton
          className='mb-2'
          color='primary'   
          // Hacemos la navegacion desde el boton
          // Con .push colocamos una pantalla sobre la pagina actual
          onPress={ () => router.push('/drawer/tabs/products') } // Arreglamos los enlaces despues de mover la carpeta tabs dentro de drawer  
        >Producto</CustomButton>

        <CustomButton
          className='mb-2'
          color='secondary'
          onPress={ () => router.push('/drawer/tabs/profile') }   
        >Profile</CustomButton> 

        <CustomButton
          className='mb-2'
          color='tertiary'
          onPress={ () => router.push('/drawer/tabs/settings') }   
        >Settings</CustomButton> 

        {/* Si queremos trabajar ese CustomBotton como si fuera un Link 
          Solo le colocamos el asChild para que funcione correctamente (Si usamos esto en versiones 
          viejas tendremos Warnings)
          En este Commit arreglamos el codigo para quitar ese Warining
        */}
        <Link href="/drawer/tabs/products" asChild>
          <CustomButton variant='text-only' className='mb-10' color='primary'>Productos</CustomButton>
        </Link>

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