import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contex/AuthContext";

function Login(){

    const { login } = useAuth();

    const navigate = useNavigate()

    const[username,setUsername]= useState<String>("");
    const[password,setPassword] = useState<String>("");
    const [error,seterror] = useState<String>("")

    async function submit(event:any) {
        event.preventDefault();

        if(username === "" || password ===""){
            seterror("Username and password are requird");
        }

        const data={
            username:username,
            password:password
        }
        try {
            const response =  await axios.post("http://localhost:8081/auth/login",data)
            login(response.data);
          
            navigate("/item");
        } catch (error) {
            seterror("Error login in");
            
        }
        
    }

    return(
        <div className="p-10 mt-10 ">
            <div className="">
            <div className="max-w-[600px]   p-8 shadow-xl rounded-lg mx-auto bg-zinc-100	">
            <div className="text-center mb-5">
                    <h1 className="text-3xl  font-serif">Login</h1>
                </div>
                <form onSubmit={submit}>
                    <div className="mb-4 pl-6"> 
                    <label className="block mb-2  font-serif text-left">Username</label>
                    <input type="text" onChange={function(event){
                        setUsername(event.target.value);
                        seterror("");
                    }}
                     className="block w-11/12 p-2 bg-gray-200  border-b-2 border-indigo-500  rounded-lg" placeholder="Enter Your Username"/ >

                    </div>
                    <div className="mb-4 pl-6 "> 
                    <label className="block mb-2  font-serif text-left">Password</label>
                    <input type="password" onChange={function(event){
                        setPassword(event.target.value);
                        seterror("");
                    }} className="  block w-11/12  p-2  bg-gray-200  border-b-2 border-indigo-500 rounded-lg" placeholder="Enter Your Password"/ >

                    </div>
                    {error &&    <div className="text-sm mt-2 text-center text-red-500   ">{error}</div>}
                

                    <div className="mt-5 pr-14 pl-9 mb-7">
                        <button type="submit" className="bg-gray-700 rounded-lg text-white   py-3 w-full  hover:bg-gray-950">Login</button>
                    </div>
                </form>

            </div>
            </div>
        </div>
    )
}
export default Login;