import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chikenriceimg from '../assets/chiken.jpg';
import DayFoodType from '../Type/DayFoodType';
import StockType from '../Type/StockType';
function Menu(){

  const navigate =useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<string>("Breakfast");
 // const [QuantityItem ,setquantity] = useState<number>(0);
  const [brekfaset , setBreakfast] = useState<DayFoodType[]>([]);
  const [lunch , setlunch] = useState<DayFoodType[]>([]);
  const [Beverage , setBeverage] = useState<StockType[]>([]);
  const [IceCream , setIceCreams] = useState<StockType[]>([]);
  const [Shortets , setShortets] = useState<StockType[]>([]);
  const [toatl , setTotal] = useState<number>(0.0);


  const [orderPile, setOrderPile] = useState<any[]>([]);


  useEffect(() => {
    const newTotal = orderPile.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotal(newTotal);
  }, [orderPile]);


  const categories = ["Breakfast", "Lunch", "Beverage", "Short Eat", "Ice Cream"];

  const handleDecreaseQuantity = (itemId: number) => {
    setOrderPile((prevPile) =>
      prevPile
        .map((orderItem) =>
          orderItem.id === itemId
            ? { ...orderItem, quantity: orderItem.quantity - 1 }
            : orderItem
        )
        .filter((orderItem) => orderItem.quantity > 0) // Remove items with quantity 0
    );
  };
 
  const handleIncreaseQuantity = (itemId: number) => {
    setOrderPile((prevPile) =>
      prevPile.map((orderItem) =>
        orderItem.id === itemId
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
    );
  };

  const handleAddToOrder = (item: any) => {
    setOrderPile((prevPile) => {
      const existingItem = prevPile.find((orderItem) => orderItem.id === item.id);
      if (existingItem) {
        return prevPile.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      }
      return [...prevPile, { ...item, quantity: 1 }];
    });
  };

  const clearOrder = () => {
    setOrderPile([]);
    setTotal(0);
  };

  const handleConfirmOrder = () => {
    const totalQuantity = orderPile.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = orderPile.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  
    // Pass item names and their quantities along with total
    const orderDetails = orderPile.map((item) => ({
      name: item.product?.productname || item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    const orderIDs = orderPile.map((item) => item.product?.id || item.id);

    navigate("/payment",{
      state: {
        orderDetails,
        orderIDs,
        totalQuantity,
        totalAmount,
      },
    })
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

    
function clickEmployer(){
  navigate("/Employer")
}

    

        const getItemsToDisplay = () => {
          switch (selectedCategory) {
            case "Breakfast":
              return brekfaset;
            case "Lunch":
              return lunch;
            case "Beverage":
              return Beverage;
            case "Short Eat":
              return Shortets;
            case "Ice Cream":
              return IceCream;
            default:
              return [];
          }
        };


        useEffect(() => {
          const fetchData = async () => {
            try {
              const responses = await Promise.all([
                axios.get("http://localhost:8081/dayfood/breakfast"),
                axios.get("http://localhost:8081/dayfood/lunch"),
                axios.get("http://localhost:8081/dayfood/Beverage"),
                axios.get("http://localhost:8081/dayfood/Shortets"),
                axios.get("http://localhost:8081/dayfood/IceCream"),
              ]);
      
              setBreakfast(responses[0].data);
              setlunch(responses[1].data);
              setBeverage(responses[2].data);
              setShortets(responses[3].data);
              setIceCreams(responses[4].data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          fetchData();
        }, []);

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
          <button className="bg-green-500 mb-10 mx-5 text-white py-2 px-4 rounded hover:bg-green-600">
            Logout
          </button>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-cyan-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-white py-4 px-6 ">
            <h2 className="text-xl font-serif">📍 Cashier/Menu</h2>
            <div className="flex items-center space-x-4">
              <span className="font-serif text-gray-500">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>

          <div className="p-3">
          <div className="w-[750px] h-[55px] bg-gray-100 rounded-md shadow-md py-2 flex justify-around">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-[100px] h-[40px] py-2 px-2 rounded-2xl   font-serif ${
                  selectedCategory === category
                    ? "bg-rose-200 border-rose-100"
                    : "bg-gray-100 hover:border-rose-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

  <div
      className="mt-6 bg-white rounded-md shadow-md p-4  font-serif"
      style={{
        maxHeight: "550px", // Adjust height based on your design
        overflowY: "auto",
        width:"800px" // Enable vertical scrolling
      }}
    >
      <div className="grid grid-cols-3 gap-4">
              {getItemsToDisplay().map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
                  onClick={() => handleAddToOrder(item)}
                >
                 <img
        src={
          item.product?.image
            ? `http://localhost:8081/images/${item.product.image}` // Adjust to your server's image path
            : chikenriceimg // Default fallback image
        }
        alt={item.product?.productname || "Item"}
        className="w-full h-28 object-cover rounded-md"
      />
                  <h3 className="text-lg font-serif font-semibold mt-2">{item.product?.productname || "Item Name"}</h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif">Rs {item.price || "0.00"}</p>
                </div>
              ))}
            </div>
    </div>
  </div>

 


  <div className="flex flex-col bg-white mt-20 p-6 w-1/4 fixed right-0 h-full shadow-lg rounded-lg">
      <h3 className="text-lg font-bold mb-4 font-serif">ORDER</h3>

      <div className="h-[500px] overflow-y-auto">
            {orderPile.map((orderItem, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4 bg-gray-100 rounded-lg p-2"
              >
                <p className="font-serif">{orderItem.product?.productname}</p>
                <p className="font-serif">Rs {orderItem.price}</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded font-serif"
                    onClick={() =>handleDecreaseQuantity(orderItem.id)}
                  >
                    -
                  </button>
                  <span>{orderItem.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded font-serif"
                    onClick={() => handleIncreaseQuantity(orderItem.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
      

      {/* Add more items dynamically */}
      <hr className="my-4" />
      <p className="font-bold mb-6 font-serif">Total: Rs {toatl.toFixed(2)}</p>
      <button onClick={handleConfirmOrder} className="bg-green-500 hover:bg-green-400  text-white py-2 px-4 rounded-lg hover:bg-green-600 font-serif">
        Confirm Order
      </button>
      <button className="bg-blue-400 hover:bg-gray-400 text-white py-2 my-3 px-4 rounded-lg hover:bg-green-600 font-serif " onClick={clearOrder}>
        Clear Order
      </button>
    </div>
          </div>
          </div>

    );
}

export default Menu;