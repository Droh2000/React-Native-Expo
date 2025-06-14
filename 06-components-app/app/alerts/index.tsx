import ThemedButtom from '@/presentation/shared/ThemedButtom';
import ThemedView from '@/presentation/shared/ThemedView';
import React from 'react';
import {StyleSheet, Button, Alert} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const AlertsScreen = () => {

  // Cuando tocamos uno de estos botones pasara una de estas funciones
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel', // El tipo "destructive" solo funciona en IOS
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <ThemedView>
      <ThemedButtom className='my-5' onPress={createTwoButtonAlert}>2-Button Alert</ThemedButtom>
      <ThemedButtom className='mb-5' onPress={createThreeButtonAlert}>3-Button Alert</ThemedButtom>
    </ThemedView>
  );
};
export default AlertsScreen;
