import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infraestructure/interfaces/moviedb-movie.response";
import { MovieDBResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const getMovieByIdAction = async( id: number | string ): Promise<CompleteMovie> => {
    try{
        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${ id }`); // De axios podemos extraer el objeto "data"
        
        // Hacemos el mapeo para solo mostrar y usar las propiedaes que nos interesa
        return MovieMapper.fromTheMovieDBToCompleteMovie(data);
    }catch(error){
        console.log(error);
        throw 'Cannot load now playinf movies';
    }
}