// Este archivo se va a mandar a llamar cada vez que entremos a la ruta de "modal"
import { Stack } from 'expo-router';

const ModalLayout = () => {
  return (
    <Stack
        // Quitarle el header que muestra por defecto
        screenOptions={{
            headerShown: false,
        }}
    >
      {/* Esta es la pantalla que va a lanzar el modal */}
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window" // Este es el componente donde mostramos el contenido
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}

export default ModalLayout