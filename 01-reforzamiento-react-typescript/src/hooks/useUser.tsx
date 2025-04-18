import { useState, useEffect, useRef } from 'react';
import { User } from '../interfaces/reqres.response';
import { loadUsersAction } from '../actions/load-users.action';
export const useUser = () => {
    
    const [users, setUsers] = useState<User[]>([]);

    // Con este Hook es una pieza del State que cuando cambia no dispara el ciclo de renderizacion de React, solo cambia su valor 
    // Si requieramos mostrar la pagina en pantalla y que se vea el cambio, ahi si seria conveniente usar el useState
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsersAction(1)
        .then( users => setUsers(users) );//Cuando se resuelva la informacion obtenemos los usuarios y los mandamos con la funcion Set
    }, []);

    // Hacer funcionar los botones de Next y Prev
    const nextPage = async() => {
        // Hacemos un cambio a la pagina actual (Con "current" tomamos el valor actual)
        currentPageRef.current++;
        const users = await loadUsersAction(currentPageRef.current);

        // Si la contante de arriba nos regresa un arreglo vacio, es que ya no hay mas registros
        if( users.length > 0 ){
            // En este caso si hay registros
            setUsers( users );
        }else{
            currentPageRef.current--;
        }
    }

    const prevPage = async() => {
        // No hacemos nada porque estamos en la primera pagina
        if( currentPageRef.current < 1 ) return;
        
        currentPageRef.current--;

        const users = await loadUsersAction( currentPageRef.current );
        setUsers(users);
    }
    

    return {
        users,
        nextPage,
        prevPage,
    }
}
