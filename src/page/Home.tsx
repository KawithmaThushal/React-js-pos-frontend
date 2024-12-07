import { useNavigate } from "react-router-dom";

function Home(){
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
                { title: "Today's Sell", value: "৳ 1,200,000", change: "↑ 4.3%" },
                { title: "Orders", value: "৳ 1,200,000", change: "↑ 4.3%" },
                { title: "Today's Sell", value: "৳ 1,200,000", change: "↑ 4.3%" },
                { title: "Orders", value: "৳ 1,200,000", change: "↑ 4.3%" },
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
            <h3 className="text-lg font-bold font-serif  mb-4">Stock Alerts</h3>
            <p className="text-sm text-gray-500 mb-4 font-serif ">Low Quantity Stock</p>
            <ul className="space-y-2">
              <li className="flex justify-between items-center text-gray-700">
                <span className="font-serif ">Product Name</span>
                <button className="px-3 py-1 text-xs text-red-500 font-serif  bg-red-100 hover:bg-red-200  rounded-full">
                  Reorder
                </button>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span  className="font-serif ">Product Name</span>
                <button className="px-3 py-1 text-xs text-red-500 font-serif  bg-red-100 rounded-full hover:bg-red-200 ">
                  Reorder
                </button>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span  className="font-serif ">Product Name</span>
                <button className="px-3 py-1 text-xs text-red-500 font-serif  bg-red-100 rounded-full hover:bg-red-200 ">
                  Reorder
                </button>
              </li>
            </ul>
          </div>
        </div>

   
      
      </div>
    </div>
    );
    }


export default Home;