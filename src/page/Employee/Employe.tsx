import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeType from "../../Type/EmployeeType";

function Employe(){
  

    const navigate =useNavigate();
    const [EmplDeatils,setEmployeeDeatils] = useState<EmployeeType[]>([]);

    async function getEmployes() {
      try {
        const repones = await axios.get("http://localhost:8081/Employee/findAll");
        setEmployeeDeatils(repones.data);
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
        getEmployes();
        },[])
    
    
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
            <h2 className="text-xl font-semibold font-serif">📍Employee</h2>
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

       
      {/* Table */}
      <table className="w-[1150px] font-serif text-left text-gray-500 m-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-serif">
          <tr>
            <th scope="col" className="px-6 py-3">Employee ID</th>
            <th scope="col" className="px-6 py-3">Employee Name</th>
            <th scope="col" className="px-6 py-3">Con_Num</th>
            <th scope="col" className="px-6 py-3">NIC</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
         {EmplDeatils.map(function (emp){
          return(
<tr  className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">{emp.id}</td>
              <td className="px-6 py-4">{emp.lname} {emp.lname}</td>
              <td className="px-6 py-4">{emp.contactNumber}</td>
              <td className="px-6 py-4">{emp.nic}</td>
              <td className="px-6 py-4">
                <button

                  className="text-red-500 hover:text-red-700"
                >
                  View
                </button>
              </td>
            </tr>
          )
         })}
            
          
        </tbody>
      </table>
    </div>

          </div>
      
        

        
         
    );
}
export default Employe;