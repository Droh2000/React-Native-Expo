import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {
    const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } = useAuthContext();

    if(isChecking){
        return <h1>Verificando Usuario</h1>
    }

    return (
        <>
            {

                // Vamos a suponer que tocando estos botones se dispare el proceso de autenticacion que va a modificar nuestro contexto
                isAuthenticated ? (
                    <>
                        <h3>Bienvenido</h3>
                        <pre>{ JSON.stringify(user, null, 2) }</pre>
                        <button 
                            className="bg-blue-500 p-2 text-amber-50 rounded-xl mt-2"
                            onClick={() => logout()}
                            >
                                Salir
                        </button>
                    </>
                ): 
                
                (
                    <>
                        <h3>Login</h3>
                        <button 
                            className="bg-blue-500 p-2 text-amber-50 rounded-xl mt-2"
                            onClick={() => loginWithEmailPassword('example@example.com', '123456') }
                        >Entrar</button>
                    </>
                )
            }
        </>
    )
}