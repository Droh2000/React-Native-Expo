import ThemedButtom from '@/presentation/shared/ThemedButtom';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { View, Text, ImageSourcePropType, FlatList, Image, useWindowDimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

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

  // Saber cual es el eslide actual y para detectar si ya estamos en el utlimo
  const flatListRef = useRef<FlatList>(null); // El tipado lo sacamos cuando lo implementamos en el "ref={}"
  const [currentSlideIndex, setcurrentSlideIndex] = useState(0); // Por defecto el primero slide sera el 0 

  // Este es para cuando se llega al Slide final habilitemos que se puedan mover con el Dedo
  const [isScrollEnable, setIsScrollEnable] = useState(false);

  const onScroll = ( event: NativeSyntheticEvent<NativeScrollEvent>) => { // El tipado lo sacamos del "onScroll={}"

    // Para evitar que entre a la logica, si esta activado el Scroll no hace falta que ejecute nada mas
    if( isScrollEnable ) return;

    // En el Event tenemos cual es el ancho y largo, entre otras muchas propiedades
    // "contentOffset" -> Esto es lo que se esta moviendo y sobrepasa de la pantalla
    // "layotMeasurement" -> de aqui sacamos las medidas del Layout
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    // Usamos Math.floor porque requerimos redondearlo ya que en useState manejamos enteros
    // La operacion matematica supongamos que el width es 900 y tenemos 3 slides entonces 900/3 nos deberia de dar
    // unos 300 pixeles y con eso sabemos en cual Slide estamos 1,2,3....
    const currentIndex = Math.floor( contentOffset.x / layoutMeasurement.width );

    // Con esto evitamos obtener unos numero negativos si estamos en el primer slide
    setcurrentSlideIndex( currentIndex > 0 ? currentIndex : 0 );

    // Aqui es donde sabemos el Slide en que estamos, detectamos que estamos en la ultima
    if( currentIndex === items.length -1 ){
      setIsScrollEnable(true);
    }

  }

  // Para movernos al siguiente Slide
  const scrollToSlide = ( index: number ) => {
    if( !flatListRef.current ) return;

    flatListRef.current.scrollToIndex({
      index: index, // Pagina a la que se quiere navegar
      animated: true,
    });
  }

  return (
    <ThemedView>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => <SlideItem item={ item } />}
        horizontal
        pagingEnabled
        scrollEnabled={ isScrollEnable } // Para que solo pueda ser movido por los botones desactivamos el compoetamiento por defecto
        onScroll={ onScroll }
      />

      {
        ( currentSlideIndex === items.length - 1 )
        ? (
          <ThemedButtom 
            className='absolute bottom-10 right-5 w-[150px]'
            onPress={ () => router.dismiss() } // Con este metodo regresamos a una pantalla atras
          >
            Finalizar
          </ThemedButtom>
        )
        : (
          /* Los botones saldran segun si hay mas tarjetas que seguir recorriendo si se terminan saldra el boton de finalizar  */
          <ThemedButtom 
            className='absolute bottom-10 right-5 w-[150px]'
            onPress={ () => scrollToSlide(currentSlideIndex + 1) }  
          >
            Siguiente
          </ThemedButtom>
        )
      }
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