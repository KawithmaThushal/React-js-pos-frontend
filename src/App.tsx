import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './Component/ProtectedRoute'
import { AuthProvider } from './Contex/AuthContext'
import './CustomCss/custom.css'
import Login from './page/auth/Login'
import Home from './page/Home'
import ItemManage from './page/ItemManage'
import Shoppingcart from './page/ShopingChar'

function App() {
 
  return (
    <AuthProvider>
     <BrowserRouter>
     <Routes>
     <Route element={<ProtectedRoute/>}>
     
      <Route path="/dashboard" element={<Home/>}/>
      <Route path="/cart" element={<Shoppingcart/>}/>
      <Route path="/item" element={<ItemManage/>}/>
      </Route>
      <Route path="/auth/login" element={<Login/>}/>
     </Routes>
     </BrowserRouter>
     </AuthProvider>
  )
}

export default App
