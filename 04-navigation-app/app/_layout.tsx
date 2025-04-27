import { Slot } from "expo-router"
import "./global.css"

// Todos los componentes van a pasar por este RootLayour, por eso retornamos el Slot del ExporRouter
const RootLayout = () => {
  return <Slot/>;
}

export default RootLayout