import { useEffect, useRef, useState } from "react"

// Con esto sabemos cual de los operadores la persona le dio click
enum Operador {
    add = '+',
    substract = '-',
    multiply = 'X',
    divide = '÷',
}

export const useCalculator = () => {

    // Para armar los numeros lo hacemos con String para poder irlos concatenar
    const [formula, setFormula] = useState('0');
    // Este sera el numero que creamos al precionar los botones
    const [number, setNumber] = useState('0');
    // Este es el primer valor que vamos a ocupar es decir ocupamos el numero que esta armando
    // y el valor anterior para que podamos aplicar operaciones 
    const [prevNumber, setPrevNumber] = useState('0');

    // La idea de usar un useRef es porque no requerimos renderizar cual es el ultimo boton
    // No queremos que React empieze a procesar algo si cambia el ultimo boton
    const lastOperation = useRef<Operador>();

    // Establecemos otro efecto para que solo sean responzables de una tarea, aunque se podria meter lo de este UseEffect en el de abajo
    useEffect(() => {
      // Preguntamos si tiene un valor (El signo de la operacion que se preciono)
      if( lastOperation.current ){
        // Tomamos la primera posicion de la formula 
        const firstFormulaPart = formula.split(' ').at(0);
        // Al ultimo "number" es el valor del numero actual del que estamos construyendo
        setFormula(`${ firstFormulaPart } ${ lastOperation.current } ${ number }`)
      } else {
        setFormula(number);
      }
    }, [number])
    

    // Para construir el numero tenemos la variable "number" pero lo que es la variable "formula" es lo que se ve reflejado en la pantalla
    // Entonces cuando cambiemos el "number" queremos actualizar la formula
    useEffect(() => {
        // Calcular el resultado que se mira pequeño en la parte de abajo
        // setPrevNumber(number);
    }, [number]);

    // Para cuando se precione el boton de limpiar la pantalla 
    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    }

    // Cambiar de signo segun como se encuentre actualmente el valor
    const toggleSign = () => {
        // Si ya incluye el simbolo negativo tomamos donde esta ese caracter y se quitamos
        if(number.startsWith('-')){
            return setNumber(number.replace('-', ''));
        }
        setNumber('-'+number);
    }

    // Para ir borrando el ultimo digito (Si hay un digito y precinoamos el boton tiene que quedar un 0 no un String vacio)
    const deleteLast = () => {
        let currentSign = '-';
        let temporalNumber = number;

        if( number.includes('-') ){
            currentSign = '-';
            // Aqui qutamos el simbolo menos
            temporalNumber = number.substring(1);
        }

        if( temporalNumber.length > 1 ){
            // Con el SLICE cortamos la ultima posicion
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber('0');
    }

    // El numero anterior lo queremos establecer (Aqui vamos a hacer un calculo previo para poder mostrarlo abajo del numero grande)
    const setLastNumber = () => {
        // Calculo previo para poder mostrar abajo

        // Si estamos en la situacion en la que el numero termina con un punto, cortamos esa ultima pocicion
        if( number.endsWith('.') ){
            setPrevNumber(number.slice(0, -1));
        }

        setPrevNumber(number); // Lo igualamos al numero que estamos construyendo en este momento
        setNumber('0'); // El actual seria 0 que es el grandote que se muestra en la pantalla cuando se precionan los botones
    }


    // Cuando toquemos los botones de las operaciones vamos a disparar esta accion
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operador.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operador.multiply;
    }

    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operador.substract;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operador.add;
    }

    // Logica de la construccion de ese numero que se llama cuando la persone toque los botones
    const buildNumber = ( numberString: string ) => {
        // Verificar  si ya existe el punto decimal (Si ya toco el Punto no tiene porque poder ingresar otro punto)
        if(number.includes('.') && numberString === '.') return; // No hacemos nada porque ya tiene el punto

        // Si el usuario ya preciono el cero o el cero empezando con el simbolo negativo
        if(number.startsWith('0') || number.startsWith('-0')){
            // Evaluamos si nos manda un punto decimal, en este caso si lo ponemos
            if(numberString === '.'){
                return setNumber(number + numberString);
            }
            
            // Evaluar si es otro cero y no hay punto (Solo se permite poner varios ceros juntos cuando ya hay un punto decimal antes)
            if(numberString === '0' && number.includes('.')){
                return setNumber(number + numberString); 
            }

            // Evaluar si es diferente de cero no hay punto y es el primer numero (No se permite poner el cero y despues junto otro numero)
            if( numberString != '0' && !number.includes('.') ){
                return setNumber(numberString);
            }

            // Evitar poner 0000000.00
            if( numberString === '0' && !number.includes('.')){
                return;
            }
        }

        setNumber(number + numberString);
    }

    return {
        formula,
        number,
        prevNumber,
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        addOperation,
        substractOperation,
        multiplyOperation,
    }
}