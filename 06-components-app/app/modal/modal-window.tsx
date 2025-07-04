// Este es el componente donde vamos a mostrar el contenido que le daremos al modal
import ThemedButtom from '@/presentation/shared/ThemedButtom'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedView from '@/presentation/shared/ThemedView'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'

const ModalScreen = () => {
  return (
    // Le cambiamos el color al modal para que se note
    <ThemedView className="justify-center items-center flex-1" bgColor="#A52182">
      <ThemedText>Hola, Soy un Modal</ThemedText>
        
      {/* Si queremos lanzar otro modal despues de haber lanzando el primero */}
      <ThemedButtom
        className='my-4'
        onPress={ () => router.push('./modal/modal-window-2') }
      >
        Otro Modal
      </ThemedButtom>

      <ThemedButtom
        onPress={ () => router.dismiss() }
      >Cerrar</ThemedButtom>

      <StatusBar
        // Cambiar el color del StatusBar
        style={ Platform.OS === 'ios' ? 'light' : 'auto' }
      />
    </ThemedView>
  )
}

export default ModalScreen