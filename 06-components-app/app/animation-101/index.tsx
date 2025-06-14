import ThemedButtom from '@/presentation/shared/ThemedButtom';
import ThemedView from '@/presentation/shared/ThemedView';

const Animationsw101Screen = () => {
  return (
    <ThemedView margin>

      {/* Botones personalizados que nosotros creamos para mostrar las animaciones */}
      <ThemedButtom 
          className='mb-5' 
          onPress={() => console.log('FadeIn')}
      >FadeIn</ThemedButtom>
      
      <ThemedButtom
        className='mb-5'
        onPress={() => console.log('FadeIn')}
      >FadeOut</ThemedButtom>
    </ThemedView>
  );
};
export default Animationsw101Screen;
