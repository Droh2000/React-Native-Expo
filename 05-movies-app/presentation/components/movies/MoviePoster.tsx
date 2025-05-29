// Vamos a crear un componente donde mostraremos en tarjeta el poster de la pelicula, este sera un componente reutilizable
import { View, Text, Pressable } from 'react-native'
import { Image } from 'react-native-reanimated/lib/typescript/Animated';

// Esto es lo que va a recibir el componente
interface Props {
    // Requeriremos hacer una redireccion a la informacion de la pelicula en particular, asi que ocupamos el id
    id: number;
    // De Movie solo requerimos el Poster ('Imagen') y no todo el objeto Movie que en el caso de un cambio externo al poster afectaria este componente
    // asi que solo le pasaremos la ruta de la imagen
    poster: string;
    // Para evaluar si sera un poster Grande o Pequeno
    smallPoster?: boolean;
    // Esto es por si queremos mandarle estilos personalizados
    className?: string
}
// No hagamos que nuestro componente tenga dependencias externas que si algo cambia en eso afecte a nuetro componente en cosas que no utiliza

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
  return (
    // Requerimos que se pueda hacer click y navegar a otra opcion (Podriamos usar Router, link o de varias formas)
    <Pressable
        className={`active:opacity-90 px-2 ${className}`}
    >
        <Image
            source={{ uri: poster }}
            className="shadow-lg rounded-2xl w-full h-full"
            // El estilo cambiara segun el tipo de poster
            style={{
                width: smallPoster ? 85 : 150,
                height: smallPoster ? 130: 250
            }}
            resizeMode="cover" // Para que se adapte la imagen de la forma que queremos
        />
    </Pressable>
  )
}

export default MoviePoster