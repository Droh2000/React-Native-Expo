import { nowPlayingAction, popularMoviesAction,topRatedMoviesAction, upcomingMoviesAction } from "@/core/actions/movies";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

    // Ocupamos otro query para traer la peticion HTTP, mantener un cache de la misma y todo lo demas
    // Cuando estemos trabajando con TransacQuery tratemos de poner querys que tengan significado
    const popularQuery = useQuery({ 
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    });

    // Lo que nos retorna "topRatedMoviesAction" va a caer en "top_rated" y a la vez requerimos en el "queryKey" mandar la pagina en donde nos encontramos
    // El problema esta que lo tenemos que manejar como in Infinity Scroll y el "useQuery" no nos va a funcionar para eso
    //  const topRatedQuery = useQuery({ 
    // Para el InfinityScroll tenemos este objeto que si cambia porque ahora nos pide nuevo argumentos
    const topRatedQuery = useInfiniteQuery({ 
        // Nos pide cual es la pagina inicial (La pagina que queremos establecer por defecto)
        initialPageParam: 1,
        queryKey: ['movies', 'top_rated'],
        // De esta funcion podemos sacar varios objetos, como la pagina
        queryFn: ({ pageParam }) => {
            return topRatedMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        // Otro argumento es establecer cual es la siguiente pagina, aqui tenemos en la funcion dos argumentos que son el ultimo arreglo de las peliculas
        // y las "pages" que es un arreglo de paginas de peliculas (Un arreglo de arrreglos)
        // para saber cual es la siguiente pagina, tomamos los "pages" y le sumamos uno
        getNextPageParam: ( lastPage, pages ) => pages.length + 1
    });

    const upcomingQuery = useQuery({ 
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    });

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
    }
}
// Hay que saber que tan pronto este hook se monte va a disparar inmediatamente estas peticiones HTTP, lo cual es conveniente para no usar
// useEffects o dependencias