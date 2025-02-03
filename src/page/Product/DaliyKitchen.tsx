import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DayFoodType from "../../Type/DayFoodType";

function DaliyKitchen(){
      const navigate =useNavigate();
      const[DayFood , setDayFood] = useState<DayFoodType[]>([]);

    

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

    function handleAddCategoryClick(){
        navigate("/product/Category");
    }
  
    function handleAddProductClick(){
      navigate("/product/Products");
  }
  
    function handleAddStockClick(){
    navigate("/product/Stock");
  
    }

    function handleSuplyerClick(){
        navigate("/product/Supplyer");
      
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
  
        useEffect(() => {
          loadDayFood();
        }, []);

        async function toggleAvailability (id: number) {
          try {
            console.log(`Toggling availability for ID: ${id}`);
            const response = await axios.patch<{ isAvailable: boolean }>(
              `http://localhost:8081/DStock/${id}/toggle`,
              { isAvailable: !DayFood.find((item) => item.id === id)?.isAvailable }
            );
            loadDayFood();

            console.log("Response from server:", response.data);
            setDayFood((prevDayFood) =>
              prevDayFood.map((item) =>
                item.id === id ? { ...item, isAvailable: response.data.isAvailable } : item
              )
            );
          } catch (error) {
            console.error("Error toggling availability:", error);
            if (axios.isAxiosError(error)) {
              alert(`Failed to toggle availability: ${error.response?.data?.message || "Unknown error"}`);
            } else {
              alert("Failed to toggle availability. Please try again.");
            }
          }
          
          
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

        {/* main function */}
        <div className="flex-1 flex flex-col bg-cyan-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-white py-4 px-6 ">
            <h2 className="text-xl font-semibold font-serif">📍 Cashier/Product/Daliy Kitchen </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-serif">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
        {/* Subheader */}
    <div className="bg-gray-100 py-4 px-6 shadow-sm">
          <h3 className="text-lg font-semibold font-serif text-gray-700">
            Manage  kitchen products.
          </h3>
          <p className="text-sm text-gray-500 font-serif">
             product availability directly from this dashboard.
          </p>
        </div>

          <div className="m-5">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleAddCategoryClick} >Add Category</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif"  onClick={handleAddProductClick}>Add Product</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleAddStockClick}>Add Stock</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleSuplyerClick}>Supplyer  </button>



          </div>
          

          {/* Table */}

          <div className="m-5 bg-white rounded shadow overflow-hidden h-[75vh]">
  <div className="overflow-y-auto h-full">
    <table className="w-full table-auto border-collapse">
      <thead className="bg-gray-200 sticky top-0 z-10">
        <tr>
          <th className="px-4 py-2 text-left font-bold text-gray-700 font-serif">Product Name</th>
          <th className="px-4 py-2 text-left font-bold text-gray-700 font-serif">Price</th>
          <th className="px-4 py-2 text-left font-bold text-gray-700 font-serif">Category</th>
          <th className="px-4 py-2 text-center font-bold text-gray-700 font-serif">Action</th>
        </tr>
      </thead>
      <tbody>
      {DayFood.map(function (dayfood){
          return(
            <tr className="border-t">
              <td className="p-4 text-sm text-gray-700">{dayfood.product?.productname}</td>
              <td className="p-4 text-sm text-gray-700">{dayfood.price}</td>
              <td className="p-4 text-sm text-gray-700">{dayfood.product?.category?.name}</td>
              <td className="px-4 py-2 text-center"> <button
            onClick={() => toggleAvailability(dayfood.id)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
              dayfood.isAvailable ? "bg-purple-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                dayfood.isAvailable ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button></td>
            </tr>

          )
        })}

    
 
  

</tbody>

      
    </table>
  </div>
</div>

          </div>

        </div>
    )

}

export default DaliyKitchen;