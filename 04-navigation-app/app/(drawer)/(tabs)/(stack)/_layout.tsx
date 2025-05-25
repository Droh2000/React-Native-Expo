import { Stack } from 'expo-router'

// La idea de este archivo es que nosotros configuremos como queremos que lusque el Stack, estilos en general
// Al colocar Stack podremos hacer que todo funcione de nuevo 
// Esto lo hacemos asi para no hacer crecer en mucho codigo el archivo de _layout original
const StackLayout = () => {
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
            }
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