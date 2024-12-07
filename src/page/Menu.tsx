import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chikenriceimg from '../assets/chiken.jpg';
function Menu(){

  const navigate =useNavigate()
  const [QuantityItem ,setquantity] = useState<number>(0);

      function hnadleItemIncrease(){
        setquantity(QuantityItem+1);

      };
      function hnadleItemdecrease(){
        if(QuantityItem>0){
          setquantity(QuantityItem-1);
        }

      };

      function clearOrder(){
       setquantity(0);
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
          <button className="bg-green-500 mb-10 mx-5 text-white py-2 px-4 rounded hover:bg-green-600">
            Logout
          </button>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-cyan-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-white py-4 px-6 ">
            <h2 className="text-xl font-serif">📍 Cashier/Menu</h2>
            <div className="flex items-center space-x-4">
              <span className="font-serif text-gray-500">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>

          <div className="p-6">
  {/* Select Category */}
  <select className="border border-gray-300 rounded-md p-2 w-1/4 font-serif">
    <option value="">Select Category</option>
    {/* Add dynamic category options */}
  </select>

  <div
      className="mt-6 bg-white rounded-md shadow-md p-4  font-serif"
      style={{
        maxHeight: "550px", // Adjust height based on your design
        overflowY: "auto",
        width:"800px" // Enable vertical scrolling
      }}
    >
      <div className="grid grid-cols-3 gap-4 flex flex-wrap gap-4">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={chikenriceimg} // Replace with dynamic image source
              alt="Chicken Wings"
              className="w-full h-28 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2  font-serif">CHICKEN WINGS</h3>
            <p className="text-gray-500 text-sm font-serif">CATEGORY: N 🌶️</p>
          </div>
        ))}
      </div>
    </div>
  </div>

 


  <div className="flex flex-col bg-white mt-20 p-6 w-1/4 fixed right-0 h-full shadow-lg rounded-lg">
      <h3 className="text-lg font-bold mb-4 font-serif">ORDER</h3>

      {/* Order Items */}
      <div className="flex justify-between items-center mb-4">
        <p className='font-serif'>Item 1 </p>
        <p className='font-serif'>Rs 550.00 </p>

        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 bg-gray-200 rounded font-serif" onClick={hnadleItemdecrease}>-</button>
          <span>{QuantityItem}</span>
          <button className="px-2 py-1 bg-gray-200 rounded font-serif" onClick={hnadleItemIncrease}>+</button>
        </div>
      </div>

      {/* Add more items dynamically */}
      <hr className="my-4" />
      <p className="mb-4 font-serif">Service Charge:</p>
      <p className="font-bold mb-6 font-serif">Total:</p>
      <button className="bg-green-500 hover:bg-green-400  text-white py-2 px-4 rounded-lg hover:bg-green-600 font-serif">
        Confirm Order
      </button>
      <button className="bg-blue-400 hover:bg-gray-400 text-white py-2 my-3 px-4 rounded-lg hover:bg-green-600 font-serif " onClick={clearOrder}>
        Clear Order
      </button>
    </div>
          </div>
          </div>

    );
}

export default Menu;