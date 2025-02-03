import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeType from "../../Type/EmployeeType";

function MangeEmploye(){

            const navigate =useNavigate();

            const [EmpID,setEmpID] =useState<number>(0);
            const [EmplDeatils,setEmployeeDeatils] = useState<EmployeeType[]>([]);
            const [image, setImage] = useState(null); 
            const [nic , setnic] = useState<number>(0);
            const [fname , setfname] = useState<string>("");      
            const [lname , setlname] = useState<string>("");      
            const [id , setid] = useState<number>(0);






            function handleEmpId(e:any){
              setEmpID(e.target.value);
            }

            async function oneUniquId(id:number) {
              try {
              const repones=  await axios.get(`http://localhost:8081/Employee/find/${id}`)
              const employeeData = repones.data;        
              setfname(employeeData.fname || ""); // Assuming the API response has a `name` field
              setlname(employeeData.lname || "");
              setnic(employeeData.nic || 0);    // Assuming the API response has a `nic` field
              setid(employeeData.id || 0); 
             setImage(employeeData.image);
            
                
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

            useEffect(() => {
              console.log("Updated fname:", fname);
            }, [fname]);
function clickEmployer(){
  navigate("/Employer")
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
            <h2 className="text-xl font-semibold font-serif">📍Employee/Manage</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-serif">October 18th 2002, 10:00AM</span>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="m-5">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={clicAddEmployee}>Add Employee </button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={clickViewEmploye}>View Emplyee</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif"  onClick={clickManageEmploye}>View Account</button>
        
          
          <div className="flex items-center mt-5">
    <input
      type="text"
      placeholder="Search Emp ID"
      onChange={handleEmpId}
      className="ml-10 w-[300px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
      type="button"
      onClick={() => oneUniquId(EmpID)}
      className="ml-3 text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      Search
    </button>
  </div>



          </div>

          {/* add the next part */}

          <div className="m-5 flex flex-col gap-6">
       

          <div className="flex flex-row gap-6">
            {/* Left Section */}
            <div className="bg-pink-50 shadow-lg rounded-lg w-1/2 p-6">
            
              <form>
               
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      readOnly
                      value={fname+" "+lname}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">NIC</label>
                    <input
                      type="text"
                      readOnly
                      value={nic}

                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Emp ID</label>
                    <input
                      type="text"
                      readOnly
                      value={id}

                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Show Image</label>
                    <div className="w-[200px] h-32 border border-gray-300 rounded-lg flex items-center justify-center bg-gray-100">
                    {image ? (
                          <img src={image} alt="Employee" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-gray-500">Image Preview</span>
                        )}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Section */}
            <div className="bg-pink-50 shadow-lg rounded-lg w-1/2 p-6 overflow-y-auto max-h-96 ">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="border border-gray-300 px-4 py-2">Emp ID</th>
                    <th className="border border-gray-300 px-4 py-2">Work Date</th>
                    <th className="border border-gray-300 px-4 py-2">Sales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">E001</td>
                    <td className="border border-gray-300 px-4 py-2">2025-01-16</td>
                    <td className="border border-gray-300 px-4 py-2">$200</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">E002</td>
                    <td className="border border-gray-300 px-4 py-2">2025-01-16</td>
                    <td className="border border-gray-300 px-4 py-2">$150</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

          </div>
          </div>

    )
}
export default MangeEmploye;