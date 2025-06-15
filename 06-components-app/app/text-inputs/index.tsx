import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

// Agregamos una configuracion dependiendo de la plataforma donde nos encontramos
const isIOS = Platform.OS === 'ios';

// Estos son para capturar informacion que ingrese el usuario por teclado
const TextInputsScreen = () => {
  // Capturar el Valor (Esta es la informacion que queremos)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  return (
    // Si queremso escribir en algo que nos oculta el teclado cuando se activa, Cuando tenemos este incoveniente tenemos este componente
    // esto nos permite hacer scroll cuando el teclado esta activo ya que por defecto se queda la pantalla congelada una vez se abre el teclado
    <KeyboardAvoidingView
      // Agregamos esta configuracion si estamos en IOS nos agrege mas altura, si no estamos en IOS no haga nada
      behavior={ isIOS ? 'height' : undefined }
    >
      {/* Cuando tenemos un numero finito de elementos y no queremos que sea cargado de manera perezosa (Si lo quisieramos usariamos un FlatList)
          en este caso usamos un ScrollView para lograr hacer Scroll pero el teclado nos va seguir estorbando en el UltimoInput que pusimos ocultandolo*/}
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              // Cuando el texto cambie (Este Input sera para el campo "Name") y cambiamos ese campo
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder='Correo Electornico'
              autoCorrect={false}
              // Para que cuando se abra el tecla nos salga con el @
              keyboardType='email-address'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder='Telefono'
              autoCorrect={false}
              // Para que cuando se abra el tecla nos salgan los numeros
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          {/* Esto es para mostrar los datos ingresado y como cambian conforme escria en los inputs
              Este contenido lo copiamos varias veses para mostrar un problema que ocurre cuando abrimos el teclado
              y este nos estorba (Como ejemplo pusimos el input al final donde deberiamos de poder escribir)
          */}
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          
          <ThemedCard
            // Si depues de la implementacion de arriba todabia el Teclado nos tapa el input en el que queremos escribir
            // agregamos algo de separacion, en este caso solo aplica a IOS porque es donde tenemos el problema
            /*style={{
              marginBottom: isIOS ? 100 : 10
            }}*/
          >
            <ThemedTextInput
                placeholder='Telefono'
                autoCorrect={false}
                // Para que cuando se abra el tecla nos salgan los numeros
                keyboardType='phone-pad'
                onChangeText={(text) => setForm({ ...form, phone: text })}
              />
          </ThemedCard>
        </ThemedView>

        {/* En caso de no querer modificar el Style, otra solucion es crearnos otro elemento */
          isIOS && <View style={{ marginBottom: 100 }}/>
        }
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
