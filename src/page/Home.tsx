import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StockType from "../Type/StockType";

function Home(){
  const navigate =useNavigate()

  const [lowitems, setLowitems] = useState<StockType[]>([]);
  const [TodaySell, setTodaySell] = useState<number>(0.0);
  const [TodaySellItems, setTodaySellItems] = useState<number>(0);
  const [SellFullItems, setSellFullItems] = useState<number>(0);
  const [SellFullAmounts, setSellFullAmounts] = useState<number>(0.0);





  function clickMenu(){
      navigate("/menu")
  }
  function clicPayment(){
    navigate("/payment")
}
function clickProduct(){
  navigate("/product")
}


    // async functions
    async function getlowitemsame() {
      try {
        const respones = await axios.get("http://localhost:8081/dayfood/lowQuantity");
        setLowitems(respones.data);
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

    async function getTodaySell() {
      try {
        const respones = await axios.get("http://localhost:8081/fullTodayAmunt");
        console.log(respones.data);
        setTodaySell(respones.data);
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

    async function getTodaySellItems() {
      try {
        const respones = await axios.get("http://localhost:8081/fullTodayItems");
        console.log(respones.data);
        setTodaySellItems(respones.data);
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

    async function getSellFullItems() {
      try {
        const respones = await axios.get("http://localhost:8081/fullItems");
        console.log(respones.data);
        setSellFullItems(respones.data);
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

    async function getSellFullAmount() {
      try {
        const respones = await axios.get("http://localhost:8081/fullamount");
        console.log(respones.data);
        setSellFullAmounts(respones.data);
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
             getlowitemsame();
             getTodaySell();
             getTodaySellItems();
             getSellFullItems();
             getSellFullAmount();
            }, []);

    return(
      <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5  bg-white  flex flex-col justify-between ">
        <div>
          <h1 className="text-4xl Sans-Serif font-bold text-center text-green-500 mt-6">POS</h1>
          <div className="mt-5">
          <ul className="space-y-4">
            <div className="  mt-9 my-2 p-2 w-full h-[50px] bg-slate-100   hover:bg-neutral-200 text-xl text-center flex items-center justify-center rounded-lg">
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
        <button className="bg-green-500 mb-10 mx-5 text-white font-serif  py-2 px-4 rounded hover:bg-green-600">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-cyan-50">
        {/* Header */}
        <div className="flex justify-between items-center bg-white py-4 px-6 ">
          <h2 className="text-xl font-serif  font-semibold">📍 Cashier/</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 font-serif ">October 18th 2002, 10:00AM</span>
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Dashboard (placeholder for future content) */}
        <div className="p-6 grid grid-cols-12 gap-6 shadow-md">
          {/* Section 1: Sales & Profit */}
          <div className="col-span-9 bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-serif  font-bold mb-4">Sales & Profit</h3>
            <div className="h-60 bg-gray-100 flex items-center justify-center rounded">
              {/* Placeholder for chart */}
              <p className="text-gray-500">[Chart Placeholder]</p>
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <button className="px-4 py-1 text-sm bg-gray-200 font-serif  rounded">Daily</button>
              <button className="px-4 py-1 text-sm bg-gray-200 font-serif  rounded">Weekly</button>
              <button className="px-4 py-1 text-sm bg-gray-200 font-serif  rounded">Monthly</button>
              <button className="px-4 py-1 text-sm bg-blue-500 text-white font-serif  rounded">Yearly</button>
            </div>
          </div>

          {/* Section 2: Cashier Info */}
          <div className="col-span-3 h-80 p-4 rounded-xl bg-white shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
            <h4 className="text-lg font-serif  font-bold">Cashier Name</h4>
            <p className="text-gray-500 font-serif ">Cashier ID</p>
            <label className="mt-4 font-serif  px-4 py-2 bg-green-100 text-black rounded">
              Last Login Time
            </label>
          </div>

          {/* Section 3: Today's Sell */}
            <div className="col-span-8 shadow-md">
            <div className="grid grid-cols-2 gap-4 ">
              {[
                { title: "Today's Sell", value: "Rs:"+TodaySell, change: "↑ 4.3%" },
                { title: "Today Sell Items", value: TodaySellItems, change: "↑ 4.3%" },
                { title: "Total Sell Items", value: SellFullItems, change: "↑ 4.3%" },
                { title: "Total Sell Amount", value: "Rs:"+SellFullAmounts, change: "↑ 4.3%" },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-rose-100 hover:bg-rose-200  rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-gray-600 text-sm font-serif ">{card.title}</h4>
                    <p className="text-2xl font-serif ">{card.value}</p>
                    <p className="text-green-500 text-sm font-serif  mt-1">{card.change} from yesterday</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex justify-center items-center">
                      <span>📈</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      

          {/* Section 4: Stock Alerts */}
          <div className="col-span-4 bg-white p-4 rounded-xl  shadow-md">
          <h3 className="text-lg font-bold font-serif mb-2">
  Stock Alerts <span className="text-sm text-gray-500 font-normal">- Low Quantity Stock</span>
</h3>
            <ul className="space-y-2 max-h-40 overflow-y-scroll">
              {lowitems.map(function (lowitem){
                return(
                 
                     <li className="flex justify-between items-center text-gray-700">
                <span className="font-serif ">{lowitem.product?.productname}</span>
                <button className="px-3 py-1 text-xs text-red-500 font-serif  bg-red-100 hover:bg-red-200  rounded-full">
                  Reorder
                </button>
              </li>

                  
                )
              })}
          </ul>



         
          </div>
        </div>

   
      
      </div>
    </div>
    );
    }


export default Home;