import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

// Esta modificacion solo la hicimos en esta Action pero se puede implementar en las demas
interface Options {
    page?: number,
    limit?: number,
}

export const topRatedMoviesAction = async({ page = 1, limit = 10 }: Options) => {
    try{
        const { data } = await movieApi.get<MovieDBResponse>('/top_rated', {
            // Aqui le pasamos los parametros
            params: {
                page: page
            }
        }); // Aqui cambiamos de endpoint
        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie );
        return movies;
    }catch(error){
        console.log(error);
        throw 'Cannot load now playinf movies';
    }
}