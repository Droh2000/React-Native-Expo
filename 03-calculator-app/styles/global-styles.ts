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
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button:{
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary, // Este es el color por defecto pero para unos botnes esto se tiene que cambiar
        fontWeight: '300',
        fontFamily: 'SpaceMono',
    }
});