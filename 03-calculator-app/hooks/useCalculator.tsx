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

    // Para construir el numero tenemos la variable "number" pero lo que es la variable "formula" es lo que se ve reflejado en la pantalla
    // Entonces cuando cambiemos el "number" queremos actualizar la formula
    useEffect(() => {
        // Calcular el resultado que se mira pequeño en la parte de abajo
        setFormula(number);
    }, [number]);


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
    }
}