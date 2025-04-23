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
        
    }

    return {
        formula,
        number,
        prevNumber,
        buildNumber,
    }
}