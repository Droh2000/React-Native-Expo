import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { useQuery } from "@tanstack/react-query";

// Esto esta relacionado a mostrar peliculas en plural
// Esto es toda la logica que requerimos para almacenar en cache, guardarla y consultarla despues
export const useMovies = () => {
    // Para usar el "useQuery()" le pasamos un KEY o un identificador (Este nos sirve porque si en otra pagina hacemos una peticion que tiene el mismo key entonces es muy
    // provablemente vamos a requerir la misma informacion que le habiamos implementado, asi dependiendo de la configuracion nos va a traer la informacion que ya tenia 
    // previamente almacenada en cache y tener todos esos datos disponibles)
    const nowPlayingQuery = useQuery({ // Estas son las peliculas que estan en cartelera
        queryKey: ['movies', 'nowPlaying'], // Con este nombre vamos a identificar lo que obtengamos de respuesta 
        queryFn: nowPlayingAction, // Funcion de la cual obtenemos los datos
        staleTime: 1000 * 60 * 60 * 24// El tiempo que queremos mantener los datos sin hacer peticion HTTP (Aqui son 24 hrs)
    });

    return {
        nowPlayingQuery
    }
}