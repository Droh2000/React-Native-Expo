// Este es el componente donde vamos a mostrar el contenido que le daremos al modal
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedView from '@/presentation/shared/ThemedView'

const ModalScreen = () => {
  return (
    // Le cambiamos el color al modal para que se note
    <ThemedView className="justify-center items-center flex-1" bgColor="#A52182">
      <ThemedText>Hola, Soy un Modal</ThemedText>
    </ThemedView>
  )
}

export default ModalScreen