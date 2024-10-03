import { BrowserRouter, Route, Routes } from "react-router-dom"
import RecipeDetail from "./pages/RecipeDetail"
import Recipe from "./pages/Recipes"


function App() {
 
  return (

 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Recipe/>}/>
  <Route path="/:id" element={<RecipeDetail/>}/>
 </Routes>
 </BrowserRouter>

  )
}

export default App
