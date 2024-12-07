import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Product(){

  const [selectedDateFilter, setSelectedDateFilter] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate =useNavigate()

  const filters = ["Last Day", "Today", "Tomorrow", "Next Week"];

  const handleFilterChange = (filter:any) => {
    setSelectedDateFilter(filter);
    setIsDropdownOpen(false); // Close the dropdown after selecting a filter
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const products = [
    {
      id: 1,
      name: "Product A",
      quantity: 10,
      expireDate: "2024-12-15",
    },
    {
      id: 2,
      name: "Product B",
      quantity: 5,
      expireDate: "2024-12-20",
    },
    
    
  ];

  function handleAddCategoryClick(){
      navigate("/product/Category");
  }

  function handleAddProductClick(){
    navigate("/product/Products");
}

  function handleAddStockClick(){
  navigate("/product/Stock");

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
          <button className="bg-green-500 mb-10 mx-5 text-white py-2 px-4 rounded hover:bg-green-600 font-serif">
            Logout
          </button>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-cyan-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-white py-4 px-6 ">
            <h2 className="text-xl font-semibold font-serif">📍 Cashier/Product </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-serif">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="m-5">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleAddCategoryClick} >Add Category</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif"  onClick={handleAddProductClick}>Add Product</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleAddStockClick}>Add Stock</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif">Supplyer Details </button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif">Add Discount</button>



          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between py-4 space-y-4 sm:space-y-0">
        {/* Dropdown Menu */}
        <div className="relative">
          <button
            id="dropdownButton"
            className="font-serif inline-flex items-center text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium rounded-lg text-sm ml-4 px-3 py-1.5"
            type="button"
            onClick={toggleDropdown}
          >
            {selectedDateFilter || "Select Filter"}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Dropdown options */}
          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ml-4 font-serif">
              <ul className="py-1">
                {filters.map((filter) => (
                  <li
                    key={filter}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleFilterChange(filter)}
                  >
                    {filter}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Table */}
      <table className="w-[1150px] font-serif text-left text-gray-500 m-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-serif">
          <tr>
            <th scope="col" className="px-6 py-3">Product ID</th>
            <th scope="col" className="px-6 py-3">Product Name</th>
            <th scope="col" className="px-6 py-3">Quantity</th>
            <th scope="col" className="px-6 py-3">Expire Date</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">{product.id}</td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4">{product.expireDate}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => alert(`Remove product ${product.id}`)}
                  className="text-red-500 hover:text-red-700"
                >
                 🗑️ Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          
    </div>

      
        </div>
    )
}
export default Product;