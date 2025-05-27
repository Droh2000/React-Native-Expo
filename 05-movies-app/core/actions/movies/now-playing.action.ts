import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

// Aqui llamamos el endpoint para traer las peliculas
export const nowPlayingAction = async() => {
    try{
        // Hacemos la peticion HTTP usando la instancia donde ya le mandamos los parametros respectivos
        // solo le mandamos la parte de la URL que cambia
        const { data } = await movieApi.get<MovieDBResponse>('/now_playing'); // De axios podemos extraer el objeto "data"

        // Para mostrar los datos como vienen
        //      console.log(JSON.stringify(data, null, 2));
        // CONSEJO: Cuando trabajamos con APIs que no creamos podriamos pensar en adoptar la escructura que ya nos viene por defecto
        // pero lo mejor es que creemos nuestra propia estructura de datos por ejemplo si viene en "nombre_dato" mejor queremos trabajar con
        // "nombreDato", tambien eliminar propiedades que no necesitamos
        // Uso del Mapper que creamos
        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie );
        return movies;
    }catch(error){
        console.log(error);
        throw 'Cannot load now playinf movies';
    }
}