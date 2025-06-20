// Este es el componente donde vamos a mostrar el contenido que le daremos al modal
import ThemedButtom from '@/presentation/shared/ThemedButtom'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedView from '@/presentation/shared/ThemedView'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'

const ModalScreen = () => {
  return (
    <ThemedView className="justify-center items-center flex-1">
      <ThemedText>Hola, Soy Otro Modal</ThemedText>

      <ThemedButtom
        // Con "dismiss" estariamos cerrando el modals
        onPress={ () => router.dismiss() }
      >Cerrar</ThemedButtom>
      
      <StatusBar
        style={ Platform.OS === 'ios' ? 'light' : 'auto' }
      />
    </ThemedView>
  )
}

export default ModalScreen