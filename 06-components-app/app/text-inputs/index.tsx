import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

// Estos son para capturar informacion que ingrese el usuario por teclado
const TextInputsScreen = () => {
  // Capturar el Valor (Esta es la informacion que queremos)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  return (
    <ThemedView margin>
      <ThemedCard className='mb-5'>
        <ThemedTextInput
          placeholder='Nombre Completo'
          autoCapitalize={'words'}
          autoCorrect={false}
          // Cuando el texto cambie (Este Input sera para el campo "Name") y cambiamos ese campo
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </ThemedCard>

      {/* Esto es para mostrar los datos ingresado y como cambian conforme escria en los inputs */}
      <ThemedCard>
        <ThemedText>
          { JSON.stringify( form, null, 2 ) }
        </ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
