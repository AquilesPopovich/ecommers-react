import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer";
import {NavBar} from "./components/NavBar"

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={
        <ItemListContainer greetings="Hello World"/>
      } />
       <Route path="/category/:id" element={
        <ItemListContainer greetings="Hello World"/>
      } />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App;
