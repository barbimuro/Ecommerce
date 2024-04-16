import './App.css'
import NavBar from './components/NavBar/navBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'
function App() {
return (
  <div className='App'>
       <BrowserRouter>
       <CartProvider>
      <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListConteiner/>}/>
              <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
              <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
              <Route path='/checkout' element={<Checkout/>}/> 
              <Route path='/cart' element={<Cart/>} />
              <Route path='*' element={<h1>404 ERROR NOT FOUND</h1>}/>
          </Routes>
          </CartProvider>
      </BrowserRouter>
  </div>
  
) 
}

export default App
