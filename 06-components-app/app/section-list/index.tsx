import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { SectionList } from 'react-native';

// Aqui tenemos un arreglo que contiene otro arreglo con la Data de las categorias, tiene que estar en este formato
// para poder verlo y usarlo 
interface Houses {
  title: string;
  data: string[];
}

const houses: Houses[] = [
  {
    title: 'DC Comics',
    data: [
      'Superman',
      'Batman',
      'Wonder Woman (Mujer Maravilla)',
      'The Flash (Flash)',
      'Aquaman',
      'Green Lantern (Linterna Verde)',
      'Cyborg',
      'Shazam',
      'Green Arrow (Flecha Verde)',
      'Batgirl (Batichica)',
      'Nightwing (Ala Nocturna)',
      'Supergirl',
      'Martian Manhunter (Detective Marciano)',
      'Harley Quinn',
      'Joker',
      'Catwoman (Gata Salvaje)',
      'Lex Luthor',
      'Poison Ivy (Hiedra Venenosa)',
      'Robin',
      'Deathstroke (Deathstroke el Terminator)',
    ],
  },
  {
    title: 'Marvel Comics',
    data: [
      'Spider-Man (Hombre Araña)',
      'Iron Man (Hombre de Hierro)',
      'Captain America (Capitán América)',
      'Thor',
      'Black Widow (Viuda Negra)',
      'Hulk',
      'Doctor Strange (Doctor Extraño)',
      'Black Panther (Pantera Negra)',
      'Captain Marvel (Capitana Marvel)',
      'Wolverine',
      'Deadpool',
      'Scarlet Witch (Bruja Escarlata)',
      'Ant-Man (Hombre Hormiga)',
      'Wasp (Avispa)',
      'Groot',
      'Rocket Raccoon (Mapache Cohete)',
      'Gamora',
      'Drax the Destroyer (Drax el Destructor)',
    ],
  },
  {
    title: 'Anime',
    data: [
      'Son Goku (Dragon Ball)',
      'Naruto Uzumaki (Naruto)',
      'Monkey D. Luffy (One Piece)',
      'Sailor Moon (Sailor Moon)',
      'Kenshin Himura (Rurouni Kenshin)',
      'Edward Elric (Fullmetal Alchemist)',
      'Inuyasha (Inuyasha)',
      'Sakura Kinomoto (Cardcaptor Sakura)',
      'Light Yagami (Death Note)',
      'Eren Yeager (Attack on Titan)',
      'Lelouch Lamperouge (Code Geass)',
      'Vegeta (Dragon Ball)',
      'Ichigo Kurosaki (Bleach)',
      'Kaneki Ken (Tokyo Ghoul)',
      'Gon Freecss (Hunter x Hunter)',
      'Asuka Langley Soryu (Neon Genesis Evangelion)',
      'Saitama (One Punch Man)',
      'Mikasa Ackerman (Attack on Titan)',
      'Natsu Dragneel (Fairy Tail)',
      'Usagi Tsukino (Sailor Moon)',
      'Sasuke Uchiha (Naruto)',
    ],
  },
];

// Con este elemento tambien podemos hacer scroll arriba y abajo
const SectionListScreen = () => {
  return (
    <ThemedView margin>
        <ThemedCard>
          <SectionList
            sections={houses} // Data
            // Indicamos cuando un elemento cambia
            keyExtractor={ (item) => item }
            // Esto es obligatorio y es donde queremos renderizarlo, dentro obtenemos la informacion que queremos mostrar
            renderItem={ ({ item }) =>
              <ThemedText>{ item }</ThemedText>
            }
            ListHeaderComponent={() => (
              // Cabezera donde se mostrara la informacion
              <ThemedText type='h1' className='font-bold mb-3'>
                Personajes
              </ThemedText>
            )}
            renderSectionHeader={({ section }) => (
              <ThemedText
                type='h1'
                className='bg-light-background dark:bg-dark-background p-2 rounded'
              >{ section.title }</ThemedText>
            )}
            stickySectionHeadersEnabled
            ListFooterComponent={ () => (
              <ThemedText 
                type='h1' 
                className='font-bold bg-light-background dark:bg-dark-background p-2 mb-10 rounded'
              >
                Secciones: { houses.length }
              </ThemedText>
            )}
            // Quitar la barra que sale en el Scroll
            showsVerticalScrollIndicator={false}
          />
        </ThemedCard>
    </ThemedView>
  );
};
export default SectionListScreen;
