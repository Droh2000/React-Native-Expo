import { Href, router } from 'expo-router';
import { View, Text, Pressable } from 'react-native'
import ThemedText from '../shared/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

// Estas son las opciones que estamos esperando recibir para personalizar las opcioens del menu
interface Props {
    title: string,
    // El Icono no puede ser un solo String, aqui le decimos que sea una llave del tipo de los iconos de Ionic
    icon: keyof typeof Ionicons.glyphMap,
    name: string,
    // Esto es para colocar bordes redondeados
    isFirst?: boolean,
    isLast?: boolean,
}

const MenuItem = ({ title, icon, name, isFirst = false, isLast = false }: Props) => {

    // Dentro del Pressable queremos que navegue a la ruta que tenemos en el "name" pero hay que recordar que por como tenemos definido
    // en el archivo "Routes.ts" en la propiedad "name" tenemos que cada ruta termina con "/index" y tenemos que cortar
    // esa parte para que funcione la navegacion (El '/index' se usa para definir la ruta)
    const [ routeName ] = name.split('/');

    // Asi tomamos los colores del hook de Expo (Tambien podemos usar tailwindCSS pero vemo diferentes formas de hacerlo)
    const primaryColor = useThemeColor({}, 'primary');

    return (
        // Queremos precionar la opcion por eso usamos el Pressable
        <Pressable
            onPress={() => router.push(routeName as Href)}
            // En los estilos le definimos para cuando estemos en modo "Dark" le ponemos el color "bg-black"
            // pero con una transparencia que es del 15
            className='bg-white dark:bg-black/15 px-5 py-2'
            // Cuando queremos computar las propiedades aqui si se recomienda hacerlo de esta manera, ya que asi no funciona: bg-[white]
            // Solo podemos crearlas y concatenarlas pero no podemos crearlas de forma en []
            style={{
                // Ponemos una cantidad de estilos basados si es el primero o ultimo, asi le aplicamos los bordes redondeados
                ...(isFirst && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10,
                }),
                ...(isLast && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10,
                }),
            }}
        >
            <View className='flex-row items-center'>
                <Ionicons name={icon} size={30} color={primaryColor} className="mr-5"/>
            </View>
            <ThemedText type='h2'>{ title }</ThemedText>
        </Pressable>
    )
}

export default MenuItem