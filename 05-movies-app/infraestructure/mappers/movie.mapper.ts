import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-response";

// Aqui usamos una clase para tener la ventaja de tener todo agrupado pero podemos usar una interface
export class MovieMapper {

    // Aqui recibimos los datos con los tipos del endpoint y vamos a regresarnos a nuestro tipo de dato
    // Ademas en el tipado nos aseguramos que nos regrese de nuestro tipo de dato
    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview, // Aqui vemos una ventaja porque originalmente tiene otro nombre
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            // El Poster originalmente solo recibimos como "/dlfkmdeskmdelkd.jpg" para poder ver las imagenes la API tiene una URL
            poster: `https://image.tmdb.org/t/p/w500${ movie.poster_path }`,
            backdrop: `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`,
        }
    }

}