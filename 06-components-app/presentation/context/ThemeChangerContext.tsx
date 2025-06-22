// En este punto si salimos de la aplicacion y volvemos a entrar no se guardaran los cambios que pusimos, tenemos que almacenar
// las preferencias en algun lugar para que se mantengan las configuraciones que el usuario establecio
// Debemos de crearnos algun contexto global que nos permita determinar cual es el tema sin teenr que entrar a la seccion y cambiarlo
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { colorScheme, useColorScheme } from 'nativewind';

// Estas son las propiedades que requerimos en el contexto
interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark'
    isSystemTheme: boolean // Si esto esta true basaremos el tema en el OS sino en la opcion establecida arriba
    // Funciones para ejecutar la logica de cambio de tema
    toggleTheme: () => void
    setSystemTheme: () => void
}

// Creamos el contexto y como no queremos inicializarlo aqui ponemos {} as el tipo de dato
const ThemeChangerContext = createContext( {} as ThemeChangerContextType);

// Custom Hook para acceder rapidamente al ThemeChangerContext y asi evitar importar el context
export const useThemeChangercontext = () => {
    const themeChanger = useContext( ThemeChangerContext );

    return themeChanger;// Quien quiera que use este hook tendra acceso a las propiedades que definimos
}

// Provider (Se coloca en el punto mas alto de la aplicacion, en expo es el _layout.tsx)
// Este es el objeto o function component que va a envolver toda la aplicacion para que todos los componentes de la misma puedan acceder
// al "ThemeChangerContext"
// Con este PropsWithChildren obtenemos automaticamanete el Childrent para no definirlo
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {

    const { colorScheme, setColorScheme } = useColorScheme();

    // Aqui determinamos cual es el Tema que esta activo
    const [isDarkMode, setIsDarkMode] = useState( colorScheme === 'dark' );
    const [isSystemThemeEnable, setisSystemThemeEnable] = useState(true); // Por defecto esta es la funcionalidad que viene en la aplcacion
    const currentTheme = isSystemThemeEnable
            ? colorScheme // Significa que quiere usar el tema que viene en el OS
            : (isDarkMode) ? 'dark' : 'light'; // Evaluamos cual es el color que la persona selecciono


    // Retornamos el nuevo provider
    return (
        // Con este provider sabemos cual es el tema
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ThemeChangerContext.Provider
                value={{
                    currentTheme: currentTheme ?? 'light',
                    isSystemTheme: isSystemThemeEnable,
                    // Las funciones son asyncronas porque guardaran en el storage
                    toggleTheme: async ()=>{
                        setIsDarkMode(!isDarkMode);
                        setColorScheme( isDarkMode ? 'light' : 'dark' );
                        setisSystemThemeEnable(false);
                        
                        // Guardar en el dispositivo fisico del dispositivos para perservar la configuracion
                    },
                    setSystemTheme: async()=>{
                        setisSystemThemeEnable(true);
                        setColorScheme('system');
                    }
                }}  
            >
                { children }
            </ThemeChangerContext.Provider>
        </ThemeProvider>
    )
}