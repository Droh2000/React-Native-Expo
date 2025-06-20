import ThemedButtom from '@/presentation/shared/ThemedButtom';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import { View, Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView>
      {/* Hacemos una navegacion a la pantalla del Modal */}
      <Link asChild className='mx-4' href='./modal/modal-windows'>
        <Text className='text-light-text dark:text-dark-text my-2 text-xl'>
          Abrir Modal
        </Text>
      </Link>

      {/* Mandamos a llamar el modal desde el boton */}
      <ThemedButtom
        onPress={ () => router.push('./modal/modal-window') }
        className='mx-4'
      >
        Abrir Modal
      </ThemedButtom>
    </ThemedView>
  );
};
export default ModalScreen;
