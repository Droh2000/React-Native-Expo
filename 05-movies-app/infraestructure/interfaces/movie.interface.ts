// Este es el que verdaderamente vamos a usar porque aqui configuraremos los datos como los queremos y solo los que vamos a usar
// de la respuesta del Endpoint
export interface Movie {
    id: number,
    title: string,
    description: string,
    releaseDate: Date,
    rating: number,
    poster: string;
    backdrop: string; // Este es un fondo que se usa en el poster
}