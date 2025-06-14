import ThemedView from '@/presentation/shared/ThemedView';
import { View, Text, Switch } from 'react-native';
import { useState } from 'react';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';

const Switches = () => {

  const [ state, setState ] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin>
      {/*
        Esto esta como demostracion para ver como los configuramos pero vamos a crearnos nuestros switch personalizados
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={state.isActive ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => setState({ ...state, isActive: value })}
        value={state.isActive}
      />*/}
      <ThemedCard>
        <ThemedSwitch
          text='Activo'
          value={ state.isActive }
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mb-4'
        />

        <ThemedSwitch
          text='Hambirento'
          value={ state.isHungry }
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className='mb-4'
        />

        <ThemedSwitch
          text='Contento'
          value={ state.isHappy }
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='mb-4'
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
