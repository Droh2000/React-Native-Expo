import { useState } from "react";

// Custom Hook
export const useCounter = () => {

    const [ count, setCount ] = useState<number>(10);       

    const increaseBy = (value: number) => {
        //setCount( count+ value );

        // Esto es otra forma de llamarla
        //setCount( (current) => current + value);

        // Para que no llegue a numeros negativos (Esto no hace un renderizado)
        setCount( Math.max( value + count, 0));
    };

    return {
        count,
        increaseBy
    }// as const -> Esto lo tenemos que poner si usamos un arreglo y no objeto
}