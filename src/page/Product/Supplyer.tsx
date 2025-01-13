import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Supplyer(){
      const navigate =useNavigate()
      const [cname , setCname] = useState<string>("");
      const [cadress , setCAdress] = useState<string>("");
      const [supplersName , setsupplersName] = useState<string>("");
      const [cnumber , setCNumber] = useState<number>();
      const [email , setEmail] = useState<string>("");




     function handleEmail(e:any){
        setEmail(e.target.value);
     }
     function handlesupplersName(e:any){
      setsupplersName(e.target.value);

     }
     function handleCNumber(e:any){
      setCNumber(e.target.value);

     }
     function handleCAdress(e:any){
      setCAdress(e.target.value);

     }
     function handleCname(e:any){
      setCname(e.target.value);

     }

     async function createSupplyer() {
      const data={
         cadress,
         cnumber,
        cname,
         supplersName,
        email,
      }
      try {
         await axios.post("http://localhost:8081/supleyr",data);
         console.log(data);
      } catch (error) {
        console.error("Error creating supplier:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Axios error:", error.response.data);
      alert(`Error: ${error.response.data.message}`);
    } else {
      alert("An unknown error occurred. Please try again.");
    }
        
      }
      
     }


    function clickMenu(){
        navigate("/menu")
    }
    function clicPayment(){
      navigate("/payment")
    }
    function clickProduct(){
    navigate("/product")
    }
    function clickHome(){
    navigate("/dashboard")
    }


    function handleAddCategoryClick(){
        navigate("/product/Category");
    }
  
    function handleAddProductClick(){
      navigate("/product/Products");
  }
  
    function handleAddStockClick(){
    navigate("/product/Stock");
  
    }
    function handleDaliyKitchenClick(){
      navigate("/product/DaliyKitchen");
    
      }
    return(
        <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/5  bg-white  flex flex-col justify-between ">
          <div>
            <h1 className="text-4xl Sans-Serif font-bold text-center text-green-500 mt-6">POS</h1>
            <div className="mt-5">
            <ul className="space-y-4">
              <div onClick={clickHome} className="  mt-9 my-2 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
                <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                  <span className="mr-2">📊</span>
                  Overview
                </li>
              </div>
              <div onClick={clickMenu} className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
              <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                <span className="mr-2">📋</span> Menu
              </li>
              </div>
              <div onClick={clicPayment} className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
              <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                <span className="mr-2">💳</span> Payment
              </li>
              </div>
              <div onClick={clickProduct} className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
              <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                <span className="mr-2">📦</span> Products
              </li>
              </div>
              <div className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
              <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                <span className="mr-2">🛒</span> Inventory
              </li>
              </div>
              <div className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
              <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                <span className="mr-2">👥</span> Employee
              </li>
              </div>
              <div className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
              <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                <span className="mr-2">⚙️</span> Settings
              </li>
              </div>
            </ul>
            </div>
          </div>
          <button className="bg-green-500 mb-10 mx-5 text-white py-2 px-4 rounded hover:bg-green-600 font-serif">
            Logout
          </button>
        </div>

        {/* main function */}
        <div className="flex-1 flex flex-col bg-cyan-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-white py-4 px-6 ">
            <h2 className="text-xl font-semibold font-serif">📍 Cashier/Product/ Supplyer </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-serif">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>

          <div className="m-2">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleDaliyKitchenClick}>Daliy Kitchen </button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleAddCategoryClick} >Add Category</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif"  onClick={handleAddProductClick}>Add Product</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleAddStockClick}>Add Stock</button>



          </div>

             {/* Supplier Form */}
        <div className="m-2 bg-white rounded shadow p-6">
          <h3 className="text-2xl font-bold font-serif mb-4">Supplier Details</h3>
          <form className="space-y-4" onSubmit={createSupplyer}>
            <div>
              <label className="block text-gray-700 font-serif mb-2">
                Supplier Company Name
              </label>
              <input
                type="text"
                onChange={handleCname}
                className="w-[500px] px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
                placeholder="Enter company name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-serif mb-2" >
                Supplier Contact Number
              </label>
              <input
                type="text"
                onChange={handleCNumber}

                className="w-[500px] px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
                placeholder="Enter contact number"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-serif mb-2">
                Supplier Address
              </label>
              <input
                type="text"
                onChange={handleCAdress}

                className="w-[500px] px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
                placeholder="Enter address"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-serif mb-2" >
                Supplier's Name
              </label>
              <input
                type="text"
                onChange={handlesupplersName}
                className="w-[500px] px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
                placeholder="Enter supplier's name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-serif mb-2">
                Supply Email
              </label>
              <input
                type="email"
            onChange={handleEmail}
                className="w-[500px] px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
                placeholder="Enter supply Email"
                required
              />
            </div>
            <button
              type="submit"
             
              className="bg-blue-500 text-white px-6 py-2 rounded-lg border border-black hover:bg-blue-600 font-serif"              >
              Submit
            </button>
          </form>
        </div>
      </div>

          </div>
    )
}
export default Supplyer;