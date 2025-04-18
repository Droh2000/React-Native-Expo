import { StrictMode } from 'react'
// La importaciones de React Doom van a cambiar si estamos trabajando en aplicaciones de React Native
// porque vamos a tener otro tipo de componentes y un renderizado diferente
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
