import { useNavigate } from "react-router-dom"

function Payment(){

  const navigate =useNavigate()



  
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
            <div onClick={clickMenu}  className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
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
          <h2 className="text-xl font-serif">📍 Cashier/Payment </h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 font-serif">October 18th 2002, 10:00AM</span>
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
        </div>


            
          <div className="p-6 text-center text-4xl font-serif">
            <span>Select Payment Method</span>
          </div>
        
          <div className="flex justify-center items-center  bg-gray-50">
  <div className="bg-white mx-6 p-6 rounded-lg w-3/4 shadow-md">
    {/* Select Payment Method */}
    <div className="text-center mb-4">
      <div className="flex justify-center ">
        <button className="px-6 py-2 bg-gray-200 text-gray-700 font-serif rounded-l-lg border border-gray-300 hover:bg-cyan-200 focus:bg-cyan-300 font-serif">
          Cash
        </button>
        <button className=" font-serif px-6 py-2 bg-gray-200 text-gray-700 rounded-r-lg border border-gray-300 hover:bg-cyan-200 focus:bg-cyan-300 font-serif">
          Card
        </button>
      </div>
    </div>

    {/* Order Details */}
    <div >
    <h3 className="text-lg font-bold font-serif mb-4">Order Number   #545</h3>
    <div className="mb-4  " >
      <label className="block text-gray-700 font-serif font-medium">Item Quantity</label>
      <input
        type="text"
        readOnly
        className="w-5/12 mt-1 px-4 py-2 font-serif border rounded-lg focus:ring focus:ring-cyan-300 bg-gray-100"
        placeholder="Quantity"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-serif">Service Charge</label>
      <input
        type="text"
        className="w-5/12 mt-1 px-4 py-2 border font-serif rounded-lg focus:ring focus:ring-cyan-300 bg-gray-100"
        placeholder="Enter Service Charge"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-serif">Subtotal</label>
      <input
        type="text"
        readOnly
        className="w-5/12 mt-1 px-4 py-2 border rounded-lg bg-gray-100 font-serif"
        value="Rs. 500.00"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-serif">Total</label>
      <input
        type="text"
        className="w-5/12 mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-cyan-300 font-serif"
        placeholder="Rs. 500.00"
      />
    </div>

    {/* Action Buttons */}
    <div className="flex justify-center ">
      <button className="mx-3 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-zinc-600 font-serif">
        Cancel Order
      </button>
      <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-zinc-600 font-serif">
        Confirm Order
      </button>
    </div>
    </div>
  </div>
  </div>

        </div>
        </div>
    )
}
export default Payment;