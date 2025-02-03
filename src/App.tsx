import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './Component/ProtectedRoute'
import { AuthProvider } from './Contex/AuthContext'
import './CustomCss/custom.css'
import Login from './page/auth/Login'
import LoginUp from './page/auth/LoginUp'
import AddEmployee from './page/Employee/AddeEmployee'
import Employe from './page/Employee/Employe'
import MangeEmploye from './page/Employee/MangeEmploye'
import ViewEmployee from './page/Employee/ViewEmployee'
import Home from './page/Home'
import ItemManage from './page/ItemManage'
import Menu from './page/Menu'
import Payment from './page/Payment'
import AddCategory from './page/Product/AddCategory'
import AddProduct from './page/Product/AddProduct'
import AddStock from './page/Product/AddStock'
import DaliyKitchen from './page/Product/DaliyKitchen'
import Product from './page/Product/Product'
import Supplyer from './page/Product/Supplyer'
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
      <Route path="/menu" element={<Menu/>} />
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product/Category" element={<AddCategory/>}/>
      <Route path="/product/Products" element={<AddProduct/>}/>
      <Route path="/product/Stock" element={<AddStock/>}/>
      <Route path="/product/DaliyKitchen" element={<DaliyKitchen/>}/>
      <Route path="/product/Supplyer" element={<Supplyer/>}/>
      <Route path="/Employer" element={<Employe/>}/>
      <Route path="/Employer/Add" element={<AddEmployee/>}/>
      <Route path="/Employer/View" element={<ViewEmployee/>}/>
      <Route path="/Employer/Mange" element={<MangeEmploye/>}/>










      </Route>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/Logup" element={<LoginUp/>}/>
     </Routes>
     </BrowserRouter>
     </AuthProvider>
  )
}

export default App
