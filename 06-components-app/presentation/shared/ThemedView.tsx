// Vamos a crearnos componentes personalizados donde solo especifiquemos el Nombre del componente y ya aplique esas clases
import { useThemeColor } from '@/hooks/useThemeColor'
import { View, Text, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Este componente deberia de tener todas las properties que esperamos de un View y solo expandir las que queremos modificar
interface Props extends ViewProps {
    // Estas son las que nos interesa sobrescribir
    className?: string,
    margin?: boolean,
    safe?: boolean,// Esta es para el caso el Safe Area
    bgColor?: string,
}

const ThemedView = ({
    style,
    className,
    margin = false,
    safe = false,
    bgColor,
    children, // Componente Hijo que sera el View
}: Props) => {
    // Aqui decidimos si ponemos el fondo por el bgColor o por el Hook
    const backgroundColor = bgColor ?? useThemeColor({}, 'background');
    
    // Sacamos el Padding dependiendo si nos pasaron el Safe
    const safeArea = useSafeAreaInsets();

  return (
    // Ahora ya no tenemos que estar definiendo las clases para cambiar entre temas en muchos lugares
    // className='bg-light-background dark:bg-dark-background' -> Lo comentamos porque aqui vamos a usar el Style
    // porque vamos a ver diferentes formas de configurar esto
    // En la vida Real no es recomendable usar los Styles y className, lo mejor es uno u otro para no reburujarnos
    <View style={[
        {
            backgroundColor: backgroundColor,
            flex: 1, // Tome todo el ancho posible
            paddingTop: safe ? safeArea.top : 0,
            marginHorizontal: margin ? 10 : 0, 
        },
        // Si defenimos estilos adicionales, los ponemos al final para sobrescribirlos 
        style
    ]}
        className={className}
    >
        { children }
    </View>
  )
}

export default ThemedView