import { useAnimation } from '@/hooks/useAnimation';
import ThemedButtom from '@/presentation/shared/ThemedButtom';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

const Animationsw101Screen = () => {

  // Usamos el customHook para reutilizar las animaciones
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation(); 

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
          // Podriamos pensar en que con la propiedad Top se le pasaria el animatedTop pero no funcionara porque esto afecta a los elementos hijos fisicamente
          // y lo que queremos es cambiarlo sin afectar el entorno, para eso usamos el Transform
          transform: [{
            // Como queremos mover de arriba a abajo
            translateY: animatedTop
          }]
        }}
      />

      {/* Botones personalizados que nosotros creamos para mostrar las animaciones */}
      <ThemedButtom 
          className='my-5'
          // Asi para aplicar mas animaciones que seria cada funcion 
          onPress={() => {
            fadeIn({});
            startMovingTopPosition({
              easing: Easing.bounce,
              duration: 700
            });
          }}
      >FadeIn</ThemedButtom>
      
      <ThemedButtom
        className='my-5'
        onPress={() => fadeOut({})}
      >FadeOut</ThemedButtom>
    </ThemedView>
  );
};
export default Animationsw101Screen;
