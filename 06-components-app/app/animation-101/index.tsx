import ThemedButtom from '@/presentation/shared/ThemedButtom';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, View } from 'react-native';

const Animationsw101Screen = () => {

  // Las animaciones seran las que ocurran cuando se preciona algunos de los botones
  // Esta constante nos permite controlar la opacidad y usamos "useRef" porque no requerimos que cada vez que cambie su valor
  // renderize nuevamente el elemento y creamos un Valor animado que va de 0 al valor que queramos
  const animatedOpacity = useRef( new Animated.Value(0) ).current;

  // Para hacer un FadeIn tenemos que pasar del valor 0 al 1, suponiendo que 0 es la opacidad
  const fadeIn = () => {
    // Como es una animacion basada en el tiempo usamos "timing"
    Animated.timing( animatedOpacity, {
      // Este es ell objeto de configuracion
      toValue: 1, // Este es el valor al que queremos llegar
      duration: 300, // milesimas de segundos que dure
      useNativeDriver: true // para que este acelerado por hardwared
      // Para que funcione tenemos que llamar el metodo start
    }).start();
  }

  const fadeOut = () => {
    Animated.timing( animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  return (
    <ThemedView margin className='justify-center items-center flex-1'>

      {/* Este es el elemento que queremos animar 
          que para aceptar el "animatedOpacity" convertimos a Animated.view
      */}
      <Animated.View
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity, // Si queremos hacer invicible el objeto ponemos la opacidad en 0
        }}
      />

      {/* Botones personalizados que nosotros creamos para mostrar las animaciones */}
      <ThemedButtom 
          className='my-5' 
          onPress={fadeIn}
      >FadeIn</ThemedButtom>
      
      <ThemedButtom
        className='my-5'
        onPress={fadeOut}
      >FadeOut</ThemedButtom>
    </ThemedView>
  );
};
export default Animationsw101Screen;
