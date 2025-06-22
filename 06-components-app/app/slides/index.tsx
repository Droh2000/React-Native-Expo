import ThemedButtom from '@/presentation/shared/ThemedButtom';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { View, Text, ImageSourcePropType, FlatList, Image, useWindowDimensions } from 'react-native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;// Este dato es para poder convertir la imagen a un componente Image
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {
  return (
    <ThemedView>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => <SlideItem item={ item } />}
        horizontal
        pagingEnabled
      />

      {/* Los botones saldran segun si hay mas tarjetas que seguir recorriendo si se terminan saldra el boton de finalizar  */}
      <ThemedButtom className='absolute bottom-10 right-5 w-[150px]'>
        Siguiente
      </ThemedButtom>

      <ThemedButtom className='absolute bottom-10 right-5 w-[150px]'>
        Finalizar
      </ThemedButtom>
    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide
}

const SlideItem = ({ item }: SlideItemProps) => {

  // Saber las dimaneciones de la pantallas
  const { width } = useWindowDimensions();

  return (
    <ThemedView
      className='flex-1 rounded p-10 justify-center bg-red-500'
      style={{width}} // Ocupe todo el ancho posible, esto lo hacemoa aqui y no en el Class porque no podemos hacer `width-${}`, esto no funciona
    >
      <Image
        source={ item.img }
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',

        }}
      />

      <ThemedText
        type='h1'
        className='text-light-primary dark:text-dark-primary'
      >
        { item.title }
      </ThemedText>

      <ThemedText
        className='mt-10'
      >
        { item.desc }
      </ThemedText>
    </ThemedView>
  )
}