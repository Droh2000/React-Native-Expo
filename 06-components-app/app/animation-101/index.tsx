import ThemedButtom from '@/presentation/shared/ThemedButtom';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

const Animationsw101Screen = () => {

  // Las animaciones seran las que ocurran cuando se preciona algunos de los botones
  // Esta constante nos permite controlar la opacidad y usamos "useRef" porque no requerimos que cada vez que cambie su valor
  // renderize nuevamente el elemento y creamos un Valor animado que va de 0 al valor que queramos
  const animatedOpacity = useRef( new Animated.Value(0) ).current;

  // Queremos hacer que cuando precionamos el boton la caja caiga desde arriba hacia abajo
  // El -100 es la cantidad de pixeles que tendra 
  const animatedTop = useRef( new Animated.Value(-100) ).current;

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

    Animated.timing( animatedTop, {
      // Este es hacia donde queremos mover el animatedTop
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      // Esto es para indicar como queremos que los valores cambien a lo largo del tiempo que dure la animacion
      // Aqui estamos diciendo que tenga un efecto como gelatina
      //  easing: Easing.elastic(3)
      // Esto es para que tenga un efecto de rebote
      easing: Easing.bounce
    }).start();
  }

  const fadeOut = () => {
    Animated.timing( animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
      // Queremos que tan pronto termine esta animacion resetemos el valor de la aminacion FadeIn, esta funcion Start recibe un Callback que es la funcion
      // que se va a disparar cuando la aimacion termine, esto no permite concatenar animacion
      // y asi ponemos que el cuadrado se ponga arriba
    //        }).start(() => animatedTop.setValue(-100) );
    // Si tubieramos mas animaciones concatenadas con esta funcion las resetamos todas a su valor original 
    }).start(() => animatedTop.resetAnimation() );
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
