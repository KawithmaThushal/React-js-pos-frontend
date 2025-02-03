import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DayFoodType from "../../Type/DayFoodType";
import ProductsType from "../../Type/ProductsType";
import StockType from "../../Type/StockType";

function AddStock(){

    const navigate =useNavigate();
    const[products , setProducts] = useState<ProductsType[]>([]);
    const[stock , setStock] = useState<StockType[]>([]);
    const[DayFood , setDayFood] = useState<DayFoodType[]>([]);


    const[quantiy,setquantity] =useState<number>(0);
    const[productId,setproductID] =useState<number>(0);

    const [expireDate,setExpireDate] = useState<Date>();
    const [price, setPrice] = useState<number>(0);
    const [foodType, setFoodType] = useState<string>("Pre Food");
    const [viewType, setViewType] = useState<string>("Pre Food");




      
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


function clickEmployer(){
  navigate("/Employer")
}
function handleProductid(e:any){
  setproductID(e.target.value);
}

function handlequantitiy(e:any){
    setquantity(e.target.value);
}

function handleExpireDate(e:any){
  setExpireDate(e.target.value);
}

function handleProductPrice(e:any) {
  setPrice(Number(e.target.value));
}


function handleAddCategoryClick(){
  navigate("/product/Category");
}

function handleAddProductClick(){
navigate("/product/Products");
}


function handleDaliyKitchenClick(){
navigate("/product/DaliyKitchen");

}

function handleSuplyerClick(){
  navigate("/product/Supplyer");

  }

  function handleFoodTypeChange(e: any) {
    setFoodType(e.target.value);
  }
  function handleFoodViewType(e: any) {
    setViewType(e.target.value);
  }



async function loadProducts() {
  try {
    const respones= await axios.get(`http://localhost:8081/Product`)
    setProducts(respones.data);
    console.log(respones.data);
  } catch (error) {

    console.error("Error loading categories:", error);
    if (axios.isAxiosError(error)) {
        console.error("Axios error details:", error.response);
        if (error.response?.status === 403) {
            console.error("Forbidden! You are not authorized to access this resource.");
        } else if (error.response?.status === 401) {
            console.error("Unauthorized! Check your JWT token.");
        }
    }
    
  }
}

async function creatStock() {
  const data={
    quaitiy:quantiy,
    expireDate:expireDate,
    productid:productId,
    price:price

  }
  try {
    await axios.post(`http://localhost:8081/Stock`,data);
    loadStock();
  } catch (error) {
    console.error("Error loading categories:", error);
    if (axios.isAxiosError(error)) {
        console.error("Axios error details:", error.response);
        if (error.response?.status === 403) {
            console.error("Forbidden! You are not authorized to access this resource.");
        } else if (error.response?.status === 401) {
            console.error("Unauthorized! Check your JWT token.");
        }
    }
  }
}

async function loadStock() {
  try {
  const respones=  await axios.get(`http://localhost:8081/Stock`);
  setStock(respones.data);
  } catch (error) {
    console.error("Error loading categories:", error);
    if (axios.isAxiosError(error)) {
        console.error("Axios error details:", error.response);
        if (error.response?.status === 403) {
            console.error("Forbidden! You are not authorized to access this resource.");
        } else if (error.response?.status === 401) {
            console.error("Unauthorized! Check your JWT token.");
        }
    }
    
  }
}

async function loadDayFood() {
  try {
  const respones=  await axios.get(`http://localhost:8081/DStock`);
  setDayFood(respones.data);
  } catch (error) {
    console.error("Error loading categories:", error);
    if (axios.isAxiosError(error)) {
        console.error("Axios error details:", error.response);
        if (error.response?.status === 403) {
            console.error("Forbidden! You are not authorized to access this resource.");
        } else if (error.response?.status === 401) {
            console.error("Unauthorized! Check your JWT token.");
        }
    }
    
  }
}


async function createDayFood() {
 
  const data = {
    productId,
    price,
  };
  try {
    await axios.post(`http://localhost:8081/DStock`, data);
    loadDayFood();
    } catch (error) {
    console.error("Error adding Day Food stock:", error);
  }
}





async function deleteStockPre(id:number) {
  try {
    await axios.delete(`http://localhost:8081/Stock/${id}`);
    loadStock() ;

  } catch (error) {
    console.error("Error deleting stock:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Axios error:", error.response.data);
    }
  }
  
}

async function deleteStockDay(id:number) {
  try {
    await axios.delete(`http://localhost:8081/DStock/${id}`);
    loadDayFood() ;

  } catch (error) {
    console.error("Error deleting stock:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Axios error:", error.response.data);
    }
  }
  
}


useEffect(function(){
  loadProducts();
  loadStock() ;
  loadDayFood();
},[]);
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
              <div onClick={clickEmployer}  className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
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

          <div className="m-5">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleDaliyKitchenClick}>Daliy Kitchen </button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleAddCategoryClick} >Add Category</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif"  onClick={handleAddProductClick}>Add Product</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleSuplyerClick}>Supplyer  </button>



          </div>


          <div className="flex space-x-5 py-6 px-6">
    {/* Form Section */}
    <div className="w-1/2 h-[520px] bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold font-serif mb-4">Add Stock</h3>

            {/* Food Type Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-semibold font-serif text-gray-700">Food Type</label>
              <select
                onChange={handleFoodTypeChange}
                className="w-full px-4 py-1 border border-gray-300 rounded-lg font-serif focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="Pre Food">Pre Food</option>
                <option value="Day Food">Day Food</option>
              </select>
            </div>

            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-sm font-serif font-semibold text-gray-700">Product Name</label>
              <select
              value={productId}
                onChange={handleProductid}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg font-serif focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option>Select Product</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.productname}
                  </option>
                ))}
              </select>
            </div>

            {/* Dynamic Fields Based on Food Type */}
            {foodType === "Pre Food" && (
              <>
                {/* Quantity */}
                <div className="mb-4">
                  <label className="block text-sm font-serif font-semibold text-gray-700">Quantity</label>
                  <input
                    onChange={handlequantitiy}
                    type="number"
                   value={quantiy}
                    className="w-full px-4 py-2 border border-gray-300 font-serif rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter Quantity"
                  />
                </div>

                {/* Expire Date */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold font-serif text-gray-700">Expire Date</label>
                  <input
                   onChange={handleExpireDate}
                    type="date"
                    value={expireDate ? expireDate.toString() : ""}
                    className="w-full font-serif px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-serif font-semibold text-gray-700">Price</label>
                  <input
                    onChange={handleProductPrice}
                    type="number"
                    value={price}
                    className="w-full px-4 py-2 border font-serif border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter Price"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                   onClick={creatStock}
                    className="bg-blue-500 font-serif text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                  >
                    Add Pre Stock
                  </button>
                </div>
              </>
            )}

        {foodType === "Day Food" && (
              <>
                {/* Price */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold font-serif text-gray-700">Price</label>
                  <input
                    onChange={handleProductPrice}
                    type="number"
                    value={price}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter Price"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                  onClick={createDayFood}
                    className="bg-blue-500 text-white font-serif py-2 px-6 rounded-lg hover:bg-blue-600"
                  >
                    Add Day Stock
                  </button>
                </div>
              </>
            )}
          </div>

    {/* Table Section */}
    <div className="w-1/2 bg-white p-4 shadow-md rounded-lg overflow-hidden">
    <div className="overflow-x-auto">
    <div className="max-h-[600px] overflow-y-auto">
    <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold font-serif">Stock List</h3>
        <select
          value={viewType}
         onChange={handleFoodViewType}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
        >
          <option value="Pre Food">Pre Foods</option>
          <option value="Day Food">Day Foods</option>
        </select>
      </div>
    
    { viewType == "Pre Food" && (
          <table className="w-full text-left border-collapse font-serif">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">Stock Price</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Product Name</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Quantity</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Expire Date</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
          </tr>

            </thead>
            <tbody>
          {stock.map(function(stock){
            return(
<tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-gray-700">Rs.{stock.price}</td>
            <td className="p-4 text-sm text-gray-700">{stock.product?.productname}</td>
            <td className="p-4 text-sm text-gray-700">{stock.quaitiy}</td>
            <td className="p-4 text-sm text-gray-700"> {stock.expireDate ? new Date(stock.expireDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "N/A"}</td>
            <td className="p-4 text-sm text-gray-700 flex space-x-4">
             
              <button 
              
              onClick={() => deleteStockPre(stock.id)}className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm">
                Delete
              </button>
            </td>
          </tr>
            )
          })}
          
          {/* Additional rows can be added dynamically */}
        </tbody>
      </table>


    )}
      {/* Day Food */}

{ viewType == "Day Food" && (
          <table className="w-full text-left border-collapse font-serif">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">Stock Price</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Product Name</th>
            <th className="p-4 text-sm font-semibold text-gray-600">category</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
          </tr>

            </thead>
            <tbody>
          {DayFood.map(function(dayFood){
            return(
<tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-gray-700">Rs.{dayFood.price}</td>
            <td className="p-4 text-sm text-gray-700">{dayFood.product?.productname}</td>
            <td className="p-4 text-sm text-gray-700"> {dayFood.product?.category?.name}</td>
            <td className="p-4 text-sm text-gray-700 flex space-x-4">
             
              <button 
              
              onClick={() => deleteStockDay(dayFood.id)}className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm">
                Delete
              </button>
            </td>
          </tr>
            )
          })}
          
          {/* Additional rows can be added dynamically */}
        </tbody>
      </table>


    )}



    </div>
  </div>
  </div>
  </div>

          </div>
          </div> 
    )
}
export default AddStock;