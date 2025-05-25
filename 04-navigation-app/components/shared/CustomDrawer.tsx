import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Text } from 'react-native'

// Por defecto donde lo usamos ya le estamos mandando las props (Estas contienen todas las opciones del menu e informacion)
const CustomDrawer = ( props: DrawerContentComponentProps) => {
    // Con el componente que encierra todo "DrawerContentScrollView" es para poder hacer Scroll
    return (
        <DrawerContentScrollView
            {...props} // Recibimos toda la informacion de las priops
            scrollEnabled={false} // Este es para que no se mueva fuera de lugar el contenido
        >
            {/* Cuando queramos meter valores predefinidos ponemos los valores entre [] */}
            <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
                <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
                    <Text className='text-primary font-work-black text-3xl'>DROH</Text>
                </View>
            </View>

            {/* Ente esa informacion que estamos recibiendo en las props tenemos los Items
                Despues de esta implementacion podremos ver el diseño de arriba y abajo el Menu con las opciones que habiamos definido
            */}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer