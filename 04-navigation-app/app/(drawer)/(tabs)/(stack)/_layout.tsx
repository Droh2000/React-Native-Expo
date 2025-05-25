import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router'

// La idea de este archivo es que nosotros configuremos como queremos que lusque el Stack, estilos en general
// Al colocar Stack podremos hacer que todo funcione de nuevo 
// Esto lo hacemos asi para no hacer crecer en mucho codigo el archivo de _layout original
const StackLayout = () => {

    // Esta logica es para mostrar el Icono del manu de hamburguesa solo en esta pagina, y no se muestre en las demas paginas
    const navigation = useNavigation();

    // Aprovechamos que recibimos del "headerLeft" el "canGoBack" asi que lo mandamos aqui
    const onHeaderLeftClick = (canGoBack: boolean) => {
        // Verificamos si podemos regresar a la pagina anterior
        if(canGoBack){
            // No usamos el Navigation.pop porque como tenemos de roots layout que tienen sus Drawers, Tabs, Stacks, entonces usamos el ".dispatch"
            // Del "StackAction" tenemos: pop(Para irse hacia atras), popToTop(Irse hacia el root del Stack), push(Para meter una nueva pagina), replace(Para evitar destruir el historial de paginas anteriores)
            navigation.dispatch( StackActions.pop() );
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer); // En caso que no pueda regresar a la pagina anterior
    }

    /*
        Tenemos dos formas de configurar las pantallas, una es a nivel de Stack (Para todas las pantallas) y la otra a nivel
        de pantalla individual con Stack.Screen
    */
  return (
    <Stack
        screenOptions={{
            // Aqui podemos personalizar a nivel global
            headerShown: false, // Para quitar la parte que indica a cual pantalla estamos (Descomentamos la linea por los Tabs porque nos sale doble si esta comentada)
            headerShadowVisible: false, // Para quitar la sombra que sale debado de la cabezera
            // Con esto cambiamos el color de fondo
            contentStyle: {
                backgroundColor: 'white',
            },
            // Tenemos que hacer que se muestre el icono del menu de hambuguesa (Esto solo lo queremos mostrar en esta pagina de inicio en todas las paginas)
            // De la desestructuracion sacamos el "canGoBack" para indicar si se puede regresar a la pagina anterior (Asi si cambia a otra pagina que cambie al icono pero para regresar a la pantalla anterior)
            // El "tintColor" seria para saber cual es elemento seleccionado
            headerLeft: ({ tintColor, canGoBack }) => <Ionicons
                name={ canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                className='mr-5'
                size={20}
                onPress={() => onHeaderLeftClick(canGoBack!)}
            />
        }}
    >
        {/* 
            Aqui podremos crear automaticamente rutas en cada una de las carpetas de los componentes que tenemos  
            y les configuramos como queramos, Ahora si tenemos el nombre que nosotros le pongamos en la parte de arriba de
            la aplicacion indicando la pantalla donde nos encontramos
            Dentro de las Options tenemos para mejorar la navegacion cuando precionamos el boton
        */}
        <Stack.Screen
            name="home/index"
            options={{
                title: "Home Screen",
            }}  
        />
        <Stack.Screen
            name="products/index"
            options={{
                title: "Products Screen",
            }}  
        />
        <Stack.Screen
            name="profile/index"
            options={{
                title: "Profile Screen",
            }}  
        />
        <Stack.Screen
            name="settings/index"
            options={{
                title: "Settings Screen",
            }}  
        />
    </Stack>
  )
}

export default StackLayout