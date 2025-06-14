import { View, Text, ViewProps } from 'react-native';

interface Props extends ViewProps{
    className?: string;
}

// Este componente lo creamos para encerrar dentro nuestro Switch
const ThemedCard = ({ className, children}: Props) => {
    return (
        <View
            // El '/10' es que le estamos agregando una opacidad de 0.1
            className={` bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5 ${ className }`}
        >
            { children }
        </View>
    );
};

export default ThemedCard