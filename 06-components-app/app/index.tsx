import { animationMenuRoutes } from '@/constants/Routes'
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
                    <Link href={ route.name.split('/')[0] as Href }>
                        { route.title }
                    </Link>
                ))
            }
        </ThemedView>
    )
}

export default ComponentsApp