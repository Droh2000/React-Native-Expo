import { View, Text, FlatList, FlatListProps } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import { Link } from 'expo-router'

const ProductsScreen = () => {
  return (
    <View className='flex flex-1 px-4'>
      {/*
        En este componente vamos a mostrar el listado de los productos
      */}
      <FlatList
        data={products}
        // Por si los elementos cambiar de forma dinamica, React sabe cuales de esos elementos cambiaron
        // de los datos tomamos la priedad unica por la que podemos identificarlos
        keyExtractor={ (item) => item.id }

        // Esta es la manera en la que vamos a renderizar el elemento
        renderItem={({item}) => (
          // Por ahora lo hacemos asi pero por defecto esto lo hariamos en un componente aparte
          <View className='mt-10'>
            <Text className='text-2xl font-work-black'>{item.title}</Text>
            <Text className=''>{item.description}</Text>

            {/* Por defecto en React todo esta basado en Row */}
            <View className='flex flex-row justify-between mt-2'>
              <Text className='font-work-black'>{item.price}</Text>
              {/* Este enlace nos llevara a una pagina aparte para ver el producto 
                Por la forma en la que creamos el archivo, le indicamos en la ruta que podemos mandar el ID del producto
                Si nos da error al declarar la ruta, hay que cancelar la ejecucion y volver a ejecutar el comando 
              */}
              <Link href={`/drawer/tabs/products/${item.id}`} className='text-primary'>
                Ver Detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsScreen