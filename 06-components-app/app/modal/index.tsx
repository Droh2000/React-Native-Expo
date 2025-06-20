import ThemedView from '@/presentation/shared/ThemedView';
import { Link } from 'expo-router';
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
    </ThemedView>
  );
};
export default ModalScreen;
