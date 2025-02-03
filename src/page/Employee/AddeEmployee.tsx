import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee(){

       const navigate =useNavigate();
       const [image, setImage] = useState(null); 
       const [fname , setfname] = useState<String>("");
       const [lname , setlname] = useState<String>("");
       const [nic , setnic] = useState<number>(0);
       const [email , setemail] = useState<String>("");
       const [contactNumber , setcontactNumber] = useState<number>(0);
       const [adressa , setadressa] = useState<String>("");
       const [city , setcity] = useState<String>("");
       const [birthday , setbirthday] = useState();



       function handlefname(e:any){
        setfname(e.target.value);
     }
     function handlelname(e:any){
      setlname(e.target.value);
    }
       function handleNic(e:any){
    setnic(Number(e.target.value));
      }
    function handlecontactNumber(e:any){
  setcontactNumber(Number(e.target.value));
    }
    function handleadress(e:any){
  setadressa(e.target.value);
    }
  function handleCity(e:any){
  setcity(e.target.value);
  }
  function handlebirthday(e:any){
  setbirthday(e.target.value);
  }
      function handleEmail(e:any){
        setemail(e.target.value);
     }
  
  
   
   
  
  
      async function createEmployee() {
        const data={
          image, // Use a valid file object or null
          fname,
          lname,
          nic,
          email,
          contactNumber,
          adressa,
          city,
          birthday,
        }
        try {
          console.log("Sending Data:",data);
          const respones =await axios.post(`http://localhost:8081/Employee/Add`,data);
          console.log(respones.data);
        } catch (error) {
          console.error("Error creating supplier:", error);
          if (axios.isAxiosError(error) && error.response) {
            console.error("Axios error:", error.response.data);
            alert(`Error: ${error.response.data.message}`);
          } else {
            alert("An unknown error occurred. Please try again.");
          }
        }
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

        function clicAddEmployee(){
          navigate("/Employer/Add")
        }
        function clickManageEmploye(){
        navigate("/Employer/Mange")
        }
        function clickViewEmploye(){
        navigate("/Employer/View")
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
            <h2 className="text-xl font-semibold font-serif">📍Employee/Add</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-serif">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="m-5">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={clicAddEmployee}>Add Employee </button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={clickViewEmploye}>View Emplyee</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif"  onClick={clickManageEmploye}>View Account</button>
        



          </div>

      {/* // add employee form */}
    
      <div className="m-2 flex flex-col items-center">
          <div className="bg-white shadow-lg rounded-lg w-full  p-8">
            <h3 className="text-xl font-bold text-center text-blue-700 mb-3 font-serif">Add Employee Details</h3>
            <form>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="w-[500px]">
                    <label className="block text-gray-700 font-medium mb-2 font-serif">First Name</label>
                    <input
                      type="text"
                      className="font-serif w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter first name"
                  //    value={fname}
                      onChange={handlefname}
                    />
                  </div>
                  <div className="w-[500px]">
                    <label className="block text-gray-700 font-medium mb-2 font-serif">Last Name</label>
                    <input
                      type="text"
                      className="w-[500px] font-serif border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter last name"
                   //   value={lname}
                      onChange={handlelname}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                <div className="w-[500px]">
                <label className="block text-gray-700 font-medium mb-2 font-serif">NIC</label>
                    <input
                      type="text"
                      className=" font-serif w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter NIC"
                    //  value={nic}
                      onChange={handleNic}
                    />
                  </div>
                  <div className="w-[500px]">   
                                     <label className="block text-gray-700 font-medium mb-2 font-serif">Address</label>
                    <input
                      type="text"
                      className=" font-serif w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter address"
                    //  value={adressa}
                      onChange={handleadress}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                <div className="w-[500px]">
                    <label className="block text-gray-700 font-medium mb-2 font-serif">Email</label>
                    <input
                      type="email"
                      className=" font-serif w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter email"
                     // value={email}
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="w-[500px]">
                    <label className="block text-gray-700 font-medium mb-2 font-serif">Contact Number</label>
                    <input
                      type="tel"
                      className=" font-serif w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter contact number"
                      onChange={handlecontactNumber}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                <div className="w-[500px]">                
                        <label className=" font-serif block text-gray-700 font-medium mb-2">Birthday</label>
                    <input
                      type="date"
                      className=" font-serif w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      
                      onChange={handlebirthday}
                    />
                  </div>
                  <div className="w-[500px]">
                    <label className=" font-serif block text-gray-700 font-medium mb-2">City</label>
                    <input
                      type="text"
                      className=" font-serif w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter city"
                    //   value={city}
                       onChange={handleCity}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                <div className="w-[500px]">
                    <label className=" font-serif block text-gray-700 font-medium mb-2">Upload Image</label>
                    <input
                      type="text"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="w-[500px]">
                    <label className=" font-serif block text-gray-700 font-medium mb-2">Employee ID</label>
                    <input
                      type="text"
                      className=" font-serif w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter employee ID"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                   onClick={createEmployee}
                  className=" font-serif bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>

    </div>

          </div>
      
        

        
         
    );
    
}
export default AddEmployee;