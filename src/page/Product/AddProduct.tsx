import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsType from "../../Type/ProductsType";
import categoryType from "../../Type/categoryType";

function AddProduct(){
    const navigate =useNavigate()
    const [productsView, setProducts] = useState<ProductsType[]>([]);
    const [productName, setproductName] = useState<string>("");
    const [categoryID, setCategoryId] = useState<number>();
    const[categories , setcategories] = useState<categoryType[]>([]);
    const [editproduct,setEditProduct] = useState<ProductsType | null>(null);
    const [productImage, setProductImage] = useState<File | null>(null); // State for product image
    const [existingImageURL, setExistingImageURL] = useState<string | null>(null); 
    const [viewType, setViewType] = useState("products");
    const [foodType, setFoodType] = useState<string>(""); 




   

    useEffect(() => {
      if (viewType === "products") {
        loadpreFood();
      } else {
        loadDayFood();
      }
    }, [viewType]);


      
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

    function handleProductName(e:any){
        setproductName(e.target.value);
    }

    function handleProductCategory(e:any){
      setCategoryId(e.target.value);
  }

  function handlefoodType(e:any){
    setFoodType(e.target.value);
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

  

    // async function loadProducts() {
    //   try {
    //     const respones= await axios.get(`http://localhost:8081/Product`);
    //     setProducts(respones.data);
    //   } catch (error) {
    //     console.error("Error loading categories:", error);
    //     if (axios.isAxiosError(error)) {
    //         console.error("Axios error details:", error.response);
    //         if (error.response?.status === 403) {
    //             console.error("Forbidden! You are not authorized to access this resource.");
    //         } else if (error.response?.status === 401) {
    //             console.error("Unauthorized! Check your JWT token.");
    //         }
    //     }
        
    //   }
    // }

    async function loadpreFood() {
      try {
        const respones= await axios.get(`http://localhost:8081/Product?foodType=pre Food`);
        setProducts(respones.data);
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
        const respones= await axios.get(`http://localhost:8081/Product?foodType=Day Food`);
        setProducts(respones.data);
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

    useEffect(function() {
      // loadProducts();
    },[])
    useEffect(function(){
      // loadProducts();
      loadCategory();
    } ,[])

    async function creatProduct() {
      const data={
        productname: productName,
        foodType:foodType,
        image:productImage,
        categoryId:categoryID
      }
      try {
        await axios.post(`http://localhost:8081/Product`,data);
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

    function productEditing(product:ProductsType){
      setEditProduct(product);
      setproductName(product.productname);
      setCategoryId(product.category?.id);
     
  }


    async function updateProduct() {
      const data={
        productname: productName,
        foodType:foodType,
        image:productImage,
        categoryId:categoryID
      }
      try {
        await axios.put(`http://localhost:8081/Product/${editproduct?.id}`,data);
        setEditProduct(null);
        // loadProducts();
        setproductName("");
        setCategoryId(0);
        setFoodType("");
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

    async function deleteProduct(id:number) {
      try {
        await axios.delete(`http://localhost:8081/Product/${id}`)
        loadDayFood();loadpreFood();
        
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

     

    function handleAddCategoryClick(){
      navigate("/product/Category");
  }

  

  function handleAddStockClick(){
  navigate("/product/Stock");

  }
  function handleDaliyKitchenClick(){
    navigate("/product/DaliyKitchen");
  
    }

    function handleSuplyerClick(){
      navigate("/product/Supplyer");
    
      }


    function handleProductImage(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.files && e.target.files[0]) {
        setProductImage(e.target.files[0]); // Store the selected image file
      }
    }

    function handleViewChange(e: React.ChangeEvent<HTMLSelectElement>) {
      setViewType(e.target.value); // Update the view type
    }
  

   

    return(
        <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/5  bg-white  flex flex-col justify-between ">
          <div>
            <h1 className="text-4xl Sans-Serif font-bold text-center text-green-500 mt-6">POS</h1>
            <div className="mt-5">
            <ul className="space-y-4">
              <div  onClick={clickHome} className="  mt-9 my-2 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
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
            <h2 className="text-xl font-semibold font-serif">📍 Cashier/Product/Add Product</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-serif">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="m-5">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleDaliyKitchenClick}>Daliy Kitchen </button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleAddCategoryClick} >Add Category</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleAddStockClick}>Add Stock</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={handleSuplyerClick}>Supplyer  </button>



          </div>

          <div className="flex p-6 space-x-8">
      {/* Form Section */}
      <div className="w-1/2 h-[450px] space-y-4 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-semibold mb-4 font-serif">{editproduct? "Edit Product" :"Add Prodcut"}</h3>
  <div>
    <label className="block text-sm font-semibold text-gray-700 font-serif">Product Name</label>
    <input
    value={productName}
    onChange={handleProductName}
      type="text"
      className="w-full font-serif px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Enter Product Name"
    />
  </div>
  <div>
    <label className="block text-sm font-semibold text-gray-700 font-serif">Category</label>
    <select
    value={categoryID}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
      onChange={handleProductCategory}
    >
      <option>Select Category</option>
      {categories.map(function(Catgory){
        return(
          <option value={Catgory.id}>{Catgory.name}</option>
        )
      })}
    </select>
  </div>

  <div>
          <label className="block text-sm font-semibold text-gray-700 font-serif">Food Type</label>
          <select
            value={foodType}
            onChange={handlefoodType}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif">
            <option value="Day Food">Day Food</option>
            <option value="pre Food">pre Foods</option>
          </select>
        </div>

  <div>
              <label className="block text-sm font-semibold text-gray-700 font-serif">
                Product Image
              </label>
              <input
              value={productImage}
                type="file"
                accept="image/*"
                onChange={handleProductImage}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
              />

              {/* Show existing image if editing */}
              {existingImageURL && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 font-serif">Current Image:</p>
                  <img
                    src={existingImageURL}
                    alt="Product"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>


  {editproduct?(
    <>
     <div className="flex justify-center">
    <button onClick={updateProduct} className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 font-serif">
      Update Product
    </button>
  </div>
    </>
  ):<>
   <div className="flex justify-center">
    <button onClick={creatProduct} className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 font-serif">
      Creat Product
    </button>
  </div>
  </>}
 
</div>

      {/* Table Section */}
      <div className="w-1/2 h-[530px] bg-white rounded-lg shadow-md p-4 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold font-serif">Product List</h3>
              <select
                value={viewType}
                onChange={handleViewChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 font-serif"
              >
                <option value="pre Food">Pre Foods</option>
                <option value="Day Food">Day Foods</option>
              </select>
            </div>
      <div className="overflow-x-auto">
    <div className="max-h-[480px] overflow-y-auto">
        <table className="w-full text-left border-collapse font-serif">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-600">Product ID</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Name</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Category</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {productsView.map(function (product){
              return(
                <tr className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-700">{product.id}</td>
                <td className="p-4 text-sm text-gray-700">{product.productname}</td>
                <td className="p-4 text-sm text-gray-700">{product.category?.name}</td>
                <td className="p-4 text-sm text-gray-700 flex space-x-4">
                  <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg text-sm focus:ring-2 focus:ring-blue-300"
                  onClick={() => productEditing(product)}>
                    Edit
                  </button>
                  <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm focus:ring-2 focus:ring-red-300"
                   onClick={() => deleteProduct(product.id)}>
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
          </div>
    )
}
export default AddProduct;