import axios from 'axios';

// Cada vez que se use esta instancia de Axios va a tener estos datos
export const movieApi = axios.create({
    // Esta es la configuracion de la instancia de Axios
    baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
    // Parametros generales que le tenemos que mandar al endpoint
    params: {
        language: 'es-MX',
        api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY
    }
});