// Aqui vamos a estar trabajando con React Hook Form
import { useForm } from "react-hook-form"

// A la libreria tenemos que indicarle que formularios son los que tenemos
type FormInputs = {
    email: string,
    password: string,
}

export const FormsPage = () => {
    // Aqui ya sabe la libreria que campos vamos a usar
    const {
        register, // Con este podemos registrar un campo y amarrarlo con uno de los campos
        handleSubmit, // Controlamos el Submit del Form si todas las validaciones pasan
        watch, // Para estar al pendiente de los cambios que ocurran en un campo
    } = useForm<FormInputs>({
        // Declaramos configuraciones
        defaultValues: {
            email: 'example@example.com',
            password: '123456'
        }
    });

    // Evitamos que se recargue la pagina cuando precionamos el boton
    const onSubmit = ( myForm: FormInputs ) => {

    }// useForm por defecto no renderiza la pantalla, si hace los cambios en el State interno pero fisicamente no vemos los cambios

    // Aqui vemos como se renderiza el cambio con cada cambio que ocurre
    //console.log(watch('email'));

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <h3>Formularios</h3>

            <div className="flex flex-col space-y-2 w-[500px]">
                <input 
                    type="email" 
                    placeholder="email"
                    className="border border-gray-300 p-2 rounded-xl"
                    // Con el Spread le pasamos todas las propiedades de golpe del Register
                    { ...register('email', { required: true }) }
                />
                <input 
                    type="password" 
                    placeholder="password"
                    className="border border-gray-300 p-2 rounded-xl"
                    { ...register('password', { required: true }) }
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-xl">Ingresa</button>
            </div>
        </form>
    )
}
