// Antes cuando disparabamos la peticion HTTP, si saliamos y volviamos a entrar a la misma pelicula, se volvia a disparar la peticion
// Se consumieron datos que ya teniamos cargados previamente

import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query"

// Asi que nos creamos este Hook para administrar la parte de TansTack
export const useMovie = (id: number) => {

  const movieQuery = useQuery({
    // Asi es como vamos a identificar la peticion y si alguien mas vuelve a hacerle la misma peticion con el mismo KEY le vamos a regresar la misma DATA
    queryKey: ['movie', id],
    // Esta es la funcion que quermos llamar
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24
  });

  return {
    movieQuery,
  };
}
