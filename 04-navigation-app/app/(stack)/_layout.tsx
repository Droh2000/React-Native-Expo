import { Stack } from 'expo-router'

// La idea de este archivo es que nosotros configuremos como queremos que lusque el Stack, estilos en general
// Al colocar Stack podremos hacer que todo funcione de nuevo 
// Esto lo hacemos asi para no hacer crecer en mucho codigo el archivo de _layout original
const StackLayout = () => {
  return (
    <Stack>
        {/* 
            Aqui podremos crear automaticamente rutas en cada una de las carpetas de los componentes que tenemos  
            y les configuramos como queramos, Ahora si tenemos el nombre que nosotros le pongamos en la parte de arriba de
            la aplicacion indicando la pantalla donde nos encontramos
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