import './App.css'
import NavBar from './components/NavBar/navBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
return (
  <div className='App'>
       <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListConteiner/>}/>
              <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
              <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
              <Route path='*' element={<h1>404 ERROR NOT FOUND</h1>}/>
          </Routes>
      </BrowserRouter>
  </div>
  
) 
}

export default App
