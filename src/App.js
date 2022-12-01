import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/add-products' element={<AddProduct />} />
          <Route path='/update-products' element={<UpdateProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
