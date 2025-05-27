import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import "../global.css";
import { View, Text } from 'react-native';

const RootLayout = () => {

  // Probamos aqui para saber si funciona la peticion HTTP
  nowPlayingAction();

  return (
    <View>
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout