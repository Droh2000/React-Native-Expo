import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface Props {
  // Pedimos solo la informacion que vamos a ocupar ya que no tiene sentido pedir la Movie si siempre la vamos a recibir
  poster: string,
  originalTitle: string,
  title: string,
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  // Ocupar el tamanos de la ventana
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>

      {/* Este es un boton para poder regresarnos a la pagina anterior */}
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 10,
        }}
      >
        <Pressable
          onPress={() => router.dismiss() }
        >
          <Ionicons
          className='shadow'
            name='arrow-back'
            size={30}
            color="white"
          />
        </Pressable>
      </View>

      <View
        // Queremos que esto ocupe el 70% de la pantalla
        style={{ height: screenHeight * 0.7 }}
        className='shadow-xl shadow-black/20'
      >
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
          <Image
            className='flex-1'
            source={{ uri: poster }}
            resizeMode='cover'
          />
        </View>
      </View>

      <View className='px-5 mt-5'>
        <Text className='font-normal'>{ originalTitle }</Text>
        <Text className='font-semibold text-2xl'>{ title }</Text>
      </View>
    </>
  )
}

export default MovieHeader