import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import categoryType from "../../Type/categoryType";

function AddCategory(){

    const navigate =useNavigate();
    const [CategeryName, setCategoryName] = useState<string>("");

    const[categories , setcategories] = useState<categoryType[]>([]);
    const [editCategory , setCategoryEditing]=useState<categoryType | null>(null);



      
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
  function handleaddcategory(e:any){
    setCategoryName(e.target.value);
  }

  async function loadCategory() {
    try {
       const respones = await axios.get("http://localhost:8081/Categery");
       setcategories(respones.data);
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

  async function creatCategory() {
    const data ={
      name : CategeryName
    }
    try {
      await axios.post("http://localhost:8081/Categery",data);
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

  function CategoryEditing(category:categoryType){
    setCategoryEditing(category);
    setCategoryName(category.name);
   
}

  async function updateProduct() {
    const data ={
      name:CategeryName
    }
    try {
      await axios.put(`http://localhost:8081/Categery/${editCategory?.id}` ,data);
      setCategoryEditing(null);
      loadCategory();
      setCategoryName("");
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

  async function deleteCategory(categoryid:number) {
    try {
      await axios.delete(`http://localhost:8081/Categery/${categoryid}`)
      loadCategory();
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


  useEffect( function(){
    loadCategory();
  },[])

        
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
              <div  onClick={clickMenu} className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
              <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                <span className="mr-2">📋</span> Menu
              </li>
              </div>
              <div  onClick={clicPayment} className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
              <li className="flex items-center font-serif text-slate-950  hover:text-black cursor-pointer">
                <span className="mr-2">💳</span> Payment
              </li>
              </div>
              <div  onClick={clickProduct} className="my-8 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
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
            <h2 className="text-xl font-semibold font-serif">📍 Cashier/Product/Add Category</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-serif">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center  p-6 space-y-6">
  <div className="p-2 text-center text-3xl font-serif">
    <span>Create Category</span>
  </div>
  {/* Part 1: Input Box */}
  <div className="w-[500px] bg-white shadow-md p-6 rounded-lg flex flex-col space-y-4">
    {/* Input Field */}
    <div className="flex justify-between items-center">
      <label className="text-lg font-serif font-semibold mr-4">Enter Category</label>
      <input
      value={CategeryName}
      onChange={handleaddcategory}
        type="text"
        placeholder="Type category name..."
        className="font-serif border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 flex-1"
      />
    </div>
    {/* Button */}

    {editCategory ?(
      <>
 <div className=" flex justify-center ">
      <button
      onClick={updateProduct}
        type="button"
        className="font-serif text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
      >
        Update Category
      </button>
    </div>
      </>
    ):(
      <>
       <div className=" flex justify-center ">
      <button
      onClick={creatCategory}
        type="button"
        className="font-serif text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
      >
        Create Category
      </button>
    </div>
      </>
    )}
   
  </div>
</div>
<div className="w-[70%] mx-auto mt-6 bg-white shadow-md rounded-lg overflow-hidden">
  <div className="overflow-x-auto">
    <div className="max-h-[350px] overflow-y-auto"> {/* Set a maximum height and enable vertical scrolling */}
      <table className="w-full text-left border-collapse font-serif">
        <thead className="bg-gray-100 border-b-2 border-gray-200">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">Category ID</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Category Name</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Row 1 */}
          {categories.map(function (categories){
            return(
              <tr className="hover:bg-gray-50">
              <td className="p-4 text-sm text-gray-700">{categories.id}</td>
              <td className="p-4 text-sm text-gray-700">{categories.name}</td>
              <td className="p-4 text-sm text-gray-700 flex space-x-4">
                <button  onClick={()=> CategoryEditing(categories)} className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg text-sm focus:ring-2 focus:ring-blue-300">
                  Edit
                </button>
                <button  onClick={()=> deleteCategory(categories.id)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm focus:ring-2 focus:ring-red-300">
                  Delete
                </button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
</div>
          </div>
          </div>
    )

}
export default AddCategory;