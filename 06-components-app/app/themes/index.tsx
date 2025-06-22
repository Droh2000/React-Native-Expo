import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
//import { useColorScheme } from 'react-native';
import { useColorScheme } from 'nativewind';

// Vamos a hacer que el usuario puedo elegir y cambiar entre el modo Dark y Light segun sus preferencias
const ThemesScreen = () => {

  // Detrminamos si estamos en modo Light o Dark
  //  const theme = useColorScheme();
  // Gracias a NativeWind tenemos implementada la siguiente logica
  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    // darkMode: theme === 'dark',
    darkMode: colorScheme === 'dark',
    systemMode: false,
  });

  const setDarkMode = ( value: boolean ) => {

    // Establecemos el tema
    setColorScheme( value ? 'dark' : 'light' );

    setDarkModeSettings({
      darkMode: value,
      systemMode: false, // Si la persona lo queire cambiar manualmente entonces no quiere que este basado en el sistema
    });
  }

  const setSystemMode = ( value: boolean ) => {
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
