import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

// Aqui nos creamos las propiedades del CSS que se van a repetir en muchos elementos de la aplicacion 
export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background
    },
    // Se usa mucho el FlexBox en ReactNative
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    mainResult: {
        // Usamos nuestro objeto de colores que ya teniamos 
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400'
    },
    subResult: {
        color: Colors.textSecundary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
    }
});