import { Counter } from "./components/Counter";
import { ItemListContainer } from "./components/ItemListContainer";
import {NavBar} from "./components/NavBar"

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greetings="Hello World"/>
    <Counter/>
    </>
  )
}

export default App;
