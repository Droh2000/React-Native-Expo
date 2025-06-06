import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import MenuItem from '@/presentation/menu/MenuItem'
import ThemedView from '@/presentation/shared/ThemedView'
import { Href, Link } from 'expo-router'
import { View, Text } from 'react-native'

const ComponentsApp = () => {
    return (
        <ThemedView margin>
            {/* Creacion del Menu donde navegaremos a las diferentes pantallas 
                Este "animationMenuRoutes" lo tomamos del archivo "Routes"
            */}
            {
                animationMenuRoutes.map((route, index) => (
                    // La ruta la esta esperando sin el "/index" y nosotros la estamos colocamos 
                    // asi que le decimos que lo coloque como un Href pero ademas cuando trabajamos con rutas 
                    // no hace falta ponerle el index asi que se lo quitamos con el SPLIT
                    /*<Link href={ route.name.split('/')[0] as Href }>
                        { route.title }
                    </Link>

                        Componente para mostrar correctamente las opciones del menu
                    */
                    <MenuItem
                        key={ route.title }
                        title={ route.title }
                        icon={ route.icon }
                        name={ route.name }
                        // Para saber si es el primero o ultimo lo sacamos del Index
                        isFirst = { index === 0 }
                        isLast = { index === animationMenuRoutes.length - 1 }
                    />
                ))
            }
            {/* Configuramos las demas opciones del menu */}
            <View className='my-3'/>
            {uiMenuRoutes.map((route, index) => (
                <MenuItem
                    key={ route.title }
                    title={ route.title }
                    icon={ route.icon }
                    name={ route.name }
                    // Para saber si es el primero o ultimo lo sacamos del Index
                    isFirst = { index === 0 }
                    isLast = { index === uiMenuRoutes.length - 1 }
                />
            ))}
            <View className='my-3'/>
            {menuRoutes.map((route, index) => (
                <MenuItem
                    key={ route.title }
                    title={ route.title }
                    icon={ route.icon }
                    name={ route.name }
                    // Para saber si es el primero o ultimo lo sacamos del Index
                    isFirst = { index === 0 }
                    isLast = { index === menuRoutes.length - 1 }
                />
            ))}
        </ThemedView>
    )
}

export default ComponentsApp