import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const topRatedMoviesAction = async() => {
    try{
        const { data } = await movieApi.get<MovieDBResponse>('/top_rated'); // Aqui cambiamos de endpoint
        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie );
        return movies;
    }catch(error){
        console.log(error);
        throw 'Cannot load now playinf movies';
    }
}