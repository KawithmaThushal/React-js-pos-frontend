import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment(){

  const navigate =useNavigate();
  const location = useLocation();
  const [serviceCharge, setServiceCharge]= useState<number>(0);
  const [discount, setDiscount]= useState<number>(0);
  const [Cash, setCash]= useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [isTable, setTable] = useState(false);
  const [isTakeAway, setIsTakeAway] = useState(false);

  


  const { orderDetails = [], totalQuantity = 0, totalAmount = 0 } =
  location.state || {};

  const [paymentAmount, setPaymentAmount] = useState<number>(totalAmount);


  useEffect(()=>{
    const calculatePayementamount= Number(totalAmount) + Number(serviceCharge) - Number(discount);
    setPaymentAmount(calculatePayementamount> 0 ? calculatePayementamount : 0);

  },[serviceCharge,discount,totalAmount]);

  useEffect(() =>{
    setBalance(Cash-paymentAmount);
  },[Cash,paymentAmount]);

  function clearoder(){
    setBalance(0);
    setCash(0);
    setDiscount(0);
    setPaymentAmount(0);
    setServiceCharge(0);
    totalQuantity(0);
    totalAmount(0);
    orderDetails[0];
    setBalance(0);
    
  }

function handleServiceCharge(e:any){
  setServiceCharge(e.target.value);
}

function handleDiscount(e:any){
  setDiscount(e.target.value);
}

function handleBalnce(e:any){
  setCash(e.target.value);
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
                   
          <div className="flex justify-center items-start bg-gray-50 py-6">
          <div className="flex w-[1200px] h-[620px] bg-white p-6 rounded-lg shadow-md gap-8">
            {/* Left Section */}
            <div className="w-[400px] bg-white border border-blue-500 rounded-lg p-5 shadow-md">
        <h1 className="text-center text-lg font-bold text-gray-800">POS</h1>
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-600">
            Order Id: <span className="font-normal text-black">#25689</span>
          </p>
          <div className="flex justify-between mt-4">
            <p className="text-base font-semibold text-gray-800">Items</p>
            <p className="text-base font-semibold text-gray-800">Price</p>
          </div>
          <hr className="my-2" />
          <div className="h-[200px] overflow-y-scroll">
          {orderDetails.map((item, index) => (
          <div
            key={index}
            className="flex justify-between"          >
              <p className="text-sm font-medium text-gray-700">{item.name}</p>
              <p className="text-sm font-medium text-gray-700">{item.price}</p>
            </div>
       
        ))}

             
            </div>
          <hr className="my-4" />
          <div className="text-sm space-y-2">
            <p className="flex justify-between">
              <span>Item Quantity</span> <span>{totalQuantity}</span>
            </p>
            <p className="flex justify-between">
              <span>Service Charge</span> <span>{serviceCharge}</span>
            </p>
            <p className="flex justify-between">
              <span>Discount</span> <span>{discount}</span>
            </p>
            <p className="flex justify-between">
              <span>Payment Amount</span> <span>{paymentAmount}</span>
            </p>
            <p className="flex justify-between">
              <span>Cash</span> <span>{Cash}</span>
            </p>
            <p className="flex justify-between">
              <span>Balance</span> <span>{balance}</span>
            </p>
          </div>
        </div>
      </div>
            {/* Right Section */}
            <div className="flex flex-col w-1/2 p-6 bg-slate-50 rounded-lg shadow-md ml-16">
                {/* Order ID */}
                <div className="text-center mb-4">
                  <p className="text-lg font-medium">Order Id: <span className="font-bold">#25689</span></p>
                </div>

                {/* Item Quantity */}
                <div className="flex justify-between items-center mb-4">
                  <p className="font-medium">Item Quantity:</p>
                  <p className="font-medium">{totalQuantity}</p>
                </div>

                {/* Subtotal */}
                <div className="flex justify-between items-center mb-4">
                  <p className="font-medium">Sub Total:</p>
                  <p className="font-medium"> Rs {totalAmount.toFixed(2)}</p>
                </div>

                {/* Service Charge */}
                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-1">Service Charge</label>
                  <input
                    type="text"
                    value={serviceCharge}
                    onChange={handleServiceCharge}
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-200"
                    placeholder="Enter service charge"
                  />
                </div>

                {/* Discount */}
                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-1">Discount:</label>
                  <input
                    type="text"
                    value={discount}
                    onChange={handleDiscount}
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-200"
                    placeholder="Enter discount"
                  />
                </div>

                {/* Payment Amount */}
                <div className="flex justify-between items-center mb-4">
                  <p className="font-medium">Payment Amount</p>
                  <p className="font-medium">Rs :{paymentAmount}</p>
                </div>

                {/* Cash */}
                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-1">Cash</label>
                  <input
                    type="text"
                    value={Cash}
                    onChange={handleBalnce}
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-200"
                    placeholder="Enter cash amount"
                  />
                </div>

                {/* Balance */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <label className="font-medium">Balance</label>
                    <input
                      type="text"
                      readOnly
                      className="w-40 px-2 py-1 border bg-gray-100 rounded-md"
                      value={balance}
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="font-medium">Table</label>
                    <input type="checkbox" 
                    checked={isTable} onChange={(e)=> setTable(e.target.checked)} className="w-5 h-5 border rounded-md" />
                    <label className="font-medium">Take Away</label>
                    <input  checked={isTakeAway} onChange={(e)=> setIsTakeAway(e.target.checked)}
                     type="checkbox" className="w-5 h-5 border rounded-md" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-around">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    Print Invoice
                  </button>
                  <button onClick={clearoder} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    Clear Order
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
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