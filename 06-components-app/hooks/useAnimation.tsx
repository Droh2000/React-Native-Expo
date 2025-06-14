import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {

    // Las animaciones seran las que ocurran cuando se preciona algunos de los botones
    // Esta constante nos permite controlar la opacidad y usamos "useRef" porque no requerimos que cada vez que cambie su valor
    // renderize nuevamente el elemento y creamos un Valor animado que va de 0 al valor que queramos
    const animatedOpacity = useRef( new Animated.Value(0) ).current;

    // Queremos hacer que cuando precionamos el boton la caja caiga desde arriba hacia abajo
    // El -100 es la cantidad de pixeles que tendra (Al ser un componente reutilizable parametrizamos este valor)
    const animatedTop = useRef( new Animated.Value(0) ).current;

    // Para hacer un FadeIn tenemos que pasar del valor 0 al 1, suponiendo que 0 es la opacidad
    const fadeIn = ({ 
        duration = 300, 
        toValue = 1, 
        useNativeDriver = true, 
        easing = Easing.linear, 
        callback = () => {} // Esto seria en la funcion que se llama dentro del Start 
    }) => {
        // Como es una animacion basada en el tiempo usamos "timing"
        Animated.timing( animatedOpacity, {
        // Este es ell objeto de configuracion
        toValue: toValue, // Este es el valor al que queremos llegar
        duration: duration, // milesimas de segundos que dure
        useNativeDriver: useNativeDriver, // para que este acelerado por hardwared
        easing: easing,
        // Para que funcione tenemos que llamar el metodo start
        }).start(callback);
    }

    const fadeOut = ({ 
        duration = 300, 
        toValue = 0, 
        useNativeDriver = true, 
        easing = Easing.ease, // Por defecto tendra mas lenta la entrada y salida
        callback = () => {} 
    }) => {
        Animated.timing( animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: useNativeDriver,
        easing: easing,
        // Queremos que tan pronto termine esta animacion resetemos el valor de la aminacion FadeIn, esta funcion Start recibe un Callback que es la funcion
        // que se va a disparar cuando la aimacion termine, esto no permite concatenar animacion
        // y asi ponemos que el cuadrado se ponga arriba
        //        }).start(() => animatedTop.setValue(-100) );
        // Si tubieramos mas animaciones concatenadas con esta funcion las resetamos todas a su valor original 
        //      }).start(() => animatedTop.resetAnimation() );
        }).start(callback);
    }

    // Para evitar que la animacion del movimiento del Top este dentro del FadeIn porque si acemos un FadeIn no queremos que automaticamente
    // dispare un movimiento, asi que nos creamos una funcion independiente para el movimiento
    const startMovingTopPosition = ({ 
        initialPosition = -100, // Es -100 porque queremos que el elemento venga de arriba hacia abajo y es el valor que le pasaremos a la animacionTop
        duration = 300, 
        toValue = 0, 
        useNativeDriver = true, 
        easing = Easing.ease,
        callback = () => {} 
    }) => {
        // Cada vez que se llame esta funcion se aplicara la animacion de arriba
        animatedTop.setValue(initialPosition);

        Animated.timing( animatedTop, {
            // Este es hacia donde queremos mover el animatedTop
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            // Esto es para indicar como queremos que los valores cambien a lo largo del tiempo que dure la animacion
            // Aqui estamos diciendo que tenga un efecto como gelatina
            //  easing: Easing.elastic(3)
            // Esto es para que tenga un efecto de rebote
            //    easing: Easing.bounce
            // Ahora que es un componente reutilizable le damos la animacion por defecto
            easing: easing
        }).start(callback);
    }

    return {
        animatedOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTopPosition,
    }
}
