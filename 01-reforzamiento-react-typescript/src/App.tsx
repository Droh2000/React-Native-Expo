//import { ObjectLiterals } from './typescript/ObjectLiterals'
//import { BasicTypes } from './typescript/BasicTypes'
//import { BasicFunctions } from './typescript/BasicFunctions';
//import { Counter } from "./component/Counter"

//import { LoginPage } from "./component/LoginPage"
//import { UserPage } from "./component/UserPage"
import { FormsPage } from "./component/FormsPage"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    // Todo lo que pongamos dentro de ese Provider con sus children que se estan renderisando dentro del AuthContexto
    // Esto nos va a permitir que si lo componentes que tiene dentro requieren informacion del provider, puede evaluar los componentes
    // que estan arriba de el para encontrar ese Provider
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className='text-4xl mb-5'>React + TS</h1>

        {/*<BasicTypes/>*/}
        {/*<ObjectLiterals/>*/}
        {/*<BasicFunctions/>*/}
        {/*<Counter/>*/}
        {/*<LoginPage/>*/}
        {/*<UserPage/>*/}
        <FormsPage/>
      </div>
    </AuthProvider>
  )
}

export default App
