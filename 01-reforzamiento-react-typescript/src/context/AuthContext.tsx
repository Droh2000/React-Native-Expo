import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

// Creamos una enumeracion por si en el futuro queremos expandir los Status
// Estos por defecto manejan indices en sus valores, asi que para ver la cadena de texto igualamos al string
enum AuthStatus {
    'checking'='checking', 
    'authenticated'='authenticated',
    'unauthenticated'='unauthenticated'
}

// Definimos como se mira el context (Aqui vamos a implementar el enfoque de autenticacion)
interface AuthState {
    status: AuthStatus
    token?: string,
    // Como en algun punto puede ser nulo, como en el estado de Checking por eso es opcinal
    user?: User,
    isChecking: boolean,
    isAuthenticated: boolean,
    loginWithEmailPassword: (email: string, password: string) => void
    logout: () => void,
}

interface User {
    name: string,
    email: string
}

/* 
    Nos creamos un contexto global cuando queremos pasar la misma informacion a varios componentes y no queremos usar Props 
    ya que compartimos mejor la informacion asi entre diferentes pantallas

    Aqui vamos a usar el ContextApi pero tambien podriamos usar ReduxToolkit, Zustland o cualquier otro gestor de estados
        Contexto: Aqui es donde y como grabamos la infomacion que vamos aproveer a lo largo de la aplicacion
*/
export const AuthContext = createContext({} as AuthState);

// Es comun que cuando estamos trabajando con algun componente y requieramos el context, usemos el Usecontext al que le mandamos el contexto
// pero aqui vamos a exponer el customHook que ya regrese ese contexto (Manejo de Esto Globales), con este CustomHook exponemos todo lo que el AuthContext Exponga
export const useAuthContext = () => useContext(AuthContext);

// Para poder proveer el contexto de forma global hay que crearse un proveedor
export const AuthProvider = ({ children }: PropsWithChildren) => {

    // Simulamos una peticion HTTP
    // Para poder cambiar el valor del AuthStatus, le tenemos que decir a React que hubo un cambio en el estado
    const [status, setSatus] = useState( AuthStatus.checking );

    const [user, setUser] = useState<User>();
    
    useEffect(() => {
        // Aqui vamos a cambiar el valor al que apunta el AuthStatus
        setTimeout(() => {
            setSatus( AuthStatus.unauthenticated );
        }, 1500);
    }, []);

    // Supongamos que de la informacion que nos mandan del usuario, aqui la recibimos
    const loginWithEmailPassword = ( email: string, password: string ) => {
        // Establecemos el usuario
        setUser({
            name: 'Juanito banana',
            email: email
        });
        // Cambiamos el Status
        setSatus(AuthStatus.authenticated);
    }

    const logout = () => {
        setUser({
            name: '',
            email: '',
        });
        setSatus(AuthStatus.unauthenticated);
    }

    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,
            // Vamos a hacer que podamos tomar la informacion que nos interesa
            isChecking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.authenticated,
            loginWithEmailPassword, 
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}   
