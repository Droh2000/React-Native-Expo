import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
//import { useColorScheme } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useThemeChangercontext } from '../../presentation/context/ThemeChangerContext';

// Vamos a hacer que el usuario puedo elegir y cambiar entre el modo Dark y Light segun sus preferencias
const ThemesScreen = () => {

  // Detrminamos si estamos en modo Light o Dark
  //  const theme = useColorScheme();
  // Gracias a NativeWind tenemos implementada la siguiente logica
  //const { colorScheme, setColorScheme } = useColorScheme();

  // Este hook lo comentamos porque ahora la informacion necesita ser proveeida desde el contexto
  // esto lo tenemos en el customhook
  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } = useThemeChangercontext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    // darkMode: theme === 'dark',
    // darkMode: colorScheme === 'dark',
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  });

  const setDarkMode = ( value: boolean ) => {

    // Establecemos el tema
    //  setColorScheme( value ? 'dark' : 'light' );
    toggleTheme(); // Esto ya nos pasa al tema

    setDarkModeSettings({
      darkMode: value,
      systemMode: false, // Si la persona lo queire cambiar manualmente entonces no quiere que este basado en el sistema
    });
  }

  const setSystemMode = ( value: boolean ) => {
    // Cuando se mande a llamar esta instruccion y esta en true 
    if(value){
      setSystemTheme(); // llamamos esta funcion cuando el valor este en True
    }

    setDarkModeSettings({
        darkMode: darkModeSettings.darkMode,
        systemMode: value, // Siempre sera prioritado al que este en true
    });
  }

  return (
    <ThemedView margin>
      <ThemedCard className='mt-5'>
        <ThemedSwitch
          text='Dark Mode'
          className='mb-5'
          value={ darkModeSettings.darkMode }
          onValueChange={ setDarkMode }
        />
        <ThemedSwitch
          text='System Mode'
          value = { darkModeSettings.systemMode }
          onValueChange={ setSystemMode }
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
