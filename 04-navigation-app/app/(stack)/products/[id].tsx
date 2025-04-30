// Esta sintaxis de nombrar con corchetes, es porque estamos esperando un componente 
// que reciba de forma dinamica el ID, siempre cuando se entre en la carpeta "products"
// se va a ir al index.tsx pero si queremos ir a este directorio y mandamos un argumento se iria a este archivo
import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const ProductScreen = () => {

    // Esta pantalla recibe el ID del producto, de esta funcion extraemos lo que nos interesa
    const {id} = useLocalSearchParams();

    // Buscamos el producto por el Id
    const product = products.find(p => p.id === id);

    // Verificamos si no existe entonces mandamos al usuario a la pagina de inicio
    if(!product){
        return <Redirect href="/"/>
    }

    return (
        <View className='px-5 mt-2'>
            <Text className='font-work-black text-2xl'>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text className='font-work-black'>{product.price}</Text>
        </View>
    )
}

export default ProductScreen