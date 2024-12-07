import { useNavigate } from "react-router-dom"

function AddStock(){

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
              <div onClick={clicPayment}  className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
              <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                <span className="mr-2">💳</span> Payment
              </li>
              </div>
              <div onClick={clickProduct}  className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
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
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-cyan-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-white py-4 px-6 ">
            <h2 className="text-xl font-semibold font-serif">📍 Cashier/Product/Add Stock</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-serif">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>


          </div>


          <div className="flex space-x-4 py-6 px-6">
    {/* Form Section */}
    <div className="w-1/2 bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold mb-4 font-serif">Add Stock</h3>

      {/* Product Name */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 font-serif">Product Name</label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
        >
          <option>Select Product</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Furniture</option>
          <option>Groceries</option>
        </select>
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 font-serif">Quantity</label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
          placeholder="Enter Quantity"
        />
      </div>

      {/* Expiry Date */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 font-serif">Expire Date</label>
        <input
          type="date"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
        />
      </div>

      {/* Add Stock Button */}
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 font-serif">
          Add Stock
        </button>
      </div>
    </div>

    {/* Table Section */}
    <div className="w-1/2 bg-white p-4 shadow-md rounded-lg overflow-hidden">
    <div className="overflow-x-auto">
    <div className="max-h-[600px] overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4 font-serif">Stock List</h3>

      <table className="w-full text-left border-collapse font-serif">
        <thead className="bg-gray-100 border-b-2 border-gray-200">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">Stock ID</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Product Name</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Quantity</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Expire Date</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-gray-700">1</td>
            <td className="p-4 text-sm text-gray-700">Electronics</td>
            <td className="p-4 text-sm text-gray-700">50</td>
            <td className="p-4 text-sm text-gray-700">2024-12-31</td>
            <td className="p-4 text-sm text-gray-700 flex space-x-4">
             
              <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm">
                Delete
              </button>
            </td>
          </tr>
          {/* Additional rows can be added dynamically */}
        </tbody>
      </table>
    </div>
  </div>
  </div>
  </div>

          </div>
          </div> 
    )
}
export default AddStock;