import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../Contex/AuthContext";
import categoryType from "../Type/categoryType";
import ItemType from "../Type/ItemType";

function ItemManage(){
    const [image, setImage] = useState<string | File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const {isAuthenticated , jwtToken} = useAuth();

  
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Get the selected file
  
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string); // Set the preview URL after file is loaded
            };
            reader.readAsDataURL(file); // Read the image file as a data URL
        }
    };

    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }

    console.log(jwtToken);


        const[name,setname] = useState<string>("");
        const[price,setprice] = useState<number>(0);
        const[discription,setdiscription] = useState<string>("");
        const[quantiy,setquantity] = useState<number>(0);
        const[categoryid,setcategortid] = useState<number>();

        const [categories,setcategories] = useState<categoryType[]>([]);
        const[item,setitem] = useState<ItemType[]>([]);
        const [editItem , setItemEditing]=useState<ItemType | null>(null);
      
        function handlename(e:any){
            setname(e.target.value);
        }
        function handlediscription(e:any){
            setdiscription(e.target.value);
        }
        function handleprice(e:any){
            setprice(parseFloat(e.target.value));
        }

        function handlequantity(e:any){
            setquantity(parseInt(e.target.value));
        }
        
        function handleCategoryID(e:any){
            setcategortid(parseInt(e.target.value));

        }
        

        {/*load Category*/}
        async function loadCatgory() {
            try {
                console.log("Sending request to fetch categories...");
                const response = await axios.get("http://localhost:8081/Categery", config);
                setcategories(response.data);
                console.log("Categories loaded:", response.data);
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

      

        async function loadItems(){
            try {
                const respones=await axios.get("http://localhost:8081/item",config);
                setitem(respones.data);
            } catch (error) {
                console.error("Error loading categories:", error);
                if (axios.isAxiosError(error) && error.response?.status === 401) {
                    console.error("Unauthorized! Check JWT token.");
            }}
            
        }

        async function creatItem() {
            const data={
                name:name,
                price:price,
                discription:discription,
                image:image,
                quantity:quantiy,
                categoryId:categoryid
            }
            try {
                console.log("Sending data:", data);
                await axios.post("http://localhost:8081/item",data,config);
            } catch (error) {
                console.error("Error loading categories:", error);
                if (axios.isAxiosError(error) && error.response?.status === 401) {
                    console.error("Unauthorized! Check JWT token.");
            }}
            
        }


        function clearForm() {
            setname("");
            setprice(0);
            setdiscription("");
            setquantity(0);
            setcategortid(0);
            setImage(null);
            setImagePreview(null);
            setItemEditing(null);
        }
    

function ItemEditing(item:ItemType){
    setItemEditing(item),
    setname(item.name);
    setdiscription(item.discription);
    setprice(item.price);
    setquantity(item.quantity);
    setcategortid(item.category?.id);
    setImage(item.image || null);
    
}

        async function updateItem() {
            const data={
                name:name,
                price:price,
                discription:discription,
                image:image,
                quantity:quantiy,
                categoryId:categoryid
            }
            try {
                await axios.put(`http://localhost:8081/item/${editItem?.id}`,data,config);
                setItemEditing(null);
                loadItems();
                setname("");
                setdiscription("");
                setprice(0);
                setquantity(0);
                setcategortid(0);
                setImage(null);

                
            } catch (error:any) {
                console.error("Error loading categories:", error);
        if (axios.isAxiosError(error) && error.response?.status === 401) {
            console.error("Unauthorized! Check JWT token.");
        }
            }
        }

async function deleteItem(itemid:number) {
    try {
        await axios.delete(`http://localhost:8081/item/${itemid}`,config);
        loadItems();
    } catch (error) {
        console.error("Error loading categories:", error);
        if (axios.isAxiosError(error) && error.response?.status === 401) {
            console.error("Unauthorized! Check JWT token.");
        }
    }

    
}

            useEffect(function() {

                if(isAuthenticated){
                    loadCatgory();
                    loadItems();
                   
                }
              
            },[isAuthenticated]);


    return(
        <div className="flex">
            <div className={` w-72  h-screen bg-gray-400 `}>
           
        <div className="flex mt-8 py-8 pl-8  bg-stone-200	">
        <h1 className="text-3xl font-serif"> POS SYSTEM</h1>
        </div>
        <ul className="pt-14">

        <div className="space-y-8 ">
            <li className="w-52 pl-12">
            <div className="h-12  border border-3 border-slate-100  hover:border-blue-900 rounded-lg p-2 mb-3 ">
            <div className="text-center  text-lg font-serif font-bold text-slate-800 text-zinc-950">DashBord</div>
            </div>
            </li>

            <li className="w-52 pl-12">

            <div className="h-12  border border-3 border-slate-100  hover:border-blue-900 rounded-lg p-2 mb-3">
            <div className="text-center  text-lg font-serif font-bold text-slate-800 text-zinc-950">Shoping Chart</div>
            </div>
            </li>

            <li className="w-52 pl-12">

            <div className="h-12  border border-3 border-slate-100  hover:border-blue-900 rounded-lg p-2 mb-3">
            <div className="text-center  text-lg font-serif font-bold text-slate-800 text-zinc-950">Item setting</div>
            </div>
            </li>
            <li className="w-52 pl-12">

            <div className="h-12  border border-3 border-slate-100  hover:border-blue-900 rounded-lg p-2 mb-3">
            <div className="text-center  text-lg font-serif font-bold text-slate-800 text-zinc-950">Stock Manage</div>
            </div>
            </li>
            <li className="w-52 pl-12">

            <div className="h-12  border border-3 border-slate-100  hover:border-blue-900 rounded-lg p-2 mb-3">
            <div className="text-center  text-lg font-serif font-bold text-slate-800 text-zinc-950">Staff Manage</div>
            </div>
            </li>
            </div>
        </ul>
        
            <div className="pl-12 mt-14">
                <button type="submit" className="text-center rounded-lg font-serif font-bold bg-slate-100 p-2 px-10  border border-2 border-blue-300  hover:border-blue-900	">Log Out</button>
            </div>
        </div>

        <div className="flex-1 flex flex-col">
                <div className="w-full h-14 bg-zinc-900">
                    <h3 className="pt-3 pr-44 text-end text-white font-serif text-2xl">2024-12-28</h3>
                </div>


            <div className="flex-1  flex">
            <div className=" w-[500px]   ">
                <div className="w-[450px] h-[685px] rounded-lg border-2 border-none ">
                    <h2 className="mt-5 text-slate-800 font-serif text-center text-2xl">ADD ITEMS</h2>
                    <form>
                        <div className="mb-4 pl-6 mt-6">
                        <label className="  text-slate-800 font-serif text-left text-xl">Item Name:</label>
                        <input type="text" className=" w-[300px] ml-2 p-1 bg-gray-200  border-2 border-gray-500  rounded-lg" value={name} onChange={handlename} placeholder="Enter Item Name" required/>
                        </div>
                        <div className="mb-4 pl-6 mt-6">
                        <label className="  text-slate-800 font-serif text-left text-xl">Item Discription:</label>
                        <input type="text" className=" w-[250px] ml-2 p-1 bg-gray-200  border-2 border-gray-500  rounded-lg" value={discription} onChange={handlediscription} placeholder="Enter Item Discription"required/>
                        </div>
                        <div className="mb-4 pl-6 mt-6">
                        <label className="  text-slate-800 font-serif text-left text-xl">Item Price:</label>
                        <input type="number" className=" w-[305px] ml-2 p-1 bg-gray-200  border-2 border-gray-500  rounded-lg" value={price} onChange={handleprice} placeholder="Enter Item Name"required/>
                        </div>
                        <div className="mb-4 pl-6 mt-6">
                        <label className="  text-slate-800 font-serif text-left text-xl">Item Quantity:</label>
                        <input type="number" className=" w-[270px] ml-2 p-1 bg-gray-200  border-2 border-gray-500  rounded-lg" value={quantiy} onChange={handlequantity} placeholder="Enter Item Quantity"required/>
                        </div>
                        <div className="mb-4 pl-6 mt-6">
                        <label className="  text-slate-800 font-serif text-left text-xl">Item Image:</label>
                        <input type="file" className=" w-[290px] ml-2 p-1 bg-gray-200  border-2 border-gray-500  rounded-lg"  accept="image/*" onChange={handleImageChange} />

                        {imagePreview && (
                                <div >
                                <h3 className="font-serif text-left">Image Preview:</h3>
                                <img src={imagePreview} alt="Preview" className=" ml-28" style={{ width: '200px', height: 'auto' }} />
                                </div>
                            )}
                        </div>

                        <div className="mb-4 pl-6 mt-3">
                        <label className=" text-slate-800 font-serif text-left text-xl">Select Food Category :</label>
                <select className='mt-3 w-[200px] ml-2 p-1 bg-gray-200  border-2 border-indigo-500  rounded-lg' value={categoryid} onChange={handleCategoryID} required>
                <option value="">select category</option>
                {categories.map(function (category){
                    return(
                        <option value={category.id}>{category.name}</option>
                    )
                })}
                </select>
                        </div>

                    </form>

                    <div className="mb-4 pl-10 mt-1">
                    <button type='submit' className='w-[100px] text-xl ml-5 text-center rounded-lg font-serif font-bold bg-zinc-200 p-2 border border-2 bg-neutral-300 border-zinc-100  hover:border-black' onClick={clearForm} >Clear</button>
                    {editItem ?(
                        <>
                                            <button type='submit' className='ml-10 text-xl text-center rounded-lg font-serif font-bold bg-zinc-200 p-2 border border-2 bg-neutral-300 border-zinc-100  hover:border-black' onClick={updateItem} >Update Item</button>

                        </>
                    ):(
                        <>
                                            <button type='submit' className='ml-10 text-xl text-center rounded-lg font-serif font-bold bg-zinc-200 p-2 border border-2 bg-neutral-300 border-zinc-100  hover:border-black' onClick={creatItem} >Create Item</button>

                        </>
                    )}
                    </div>

                </div>
            </div>
             <div className=" w-full  bg-zinc-200 ">
                    <div>
                    <h2 className="mt-5 text-slate-800 font-serif text-center text-2xl"> ITEM VIEWS</h2>
                    </div>
                    <div className=" mt-2 table border-separate  border-spacing-0 border-none text-center">
                        <table>
                            <thead className="bg-slate-300">
                                <tr>
                                    <th className="w-[180px]">Item ID</th>
                                    <th className="w-[200px]">Item Name</th>
                                    <th className="w-[200px]">Item Price</th>
                                    <th className="w-[200px]">Actions</th>
                                </tr>

                            </thead>
                            <tbody>
                                {/*map function*/}
                                {item.map(function(items){
                                    return(
<tr >
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.price}</td>
                                <td>
                                < button  onClick={()=>ItemEditing(items)} className="bg-green-300 text-slate-600 px-2 py-1 rounded-lg hover:bg-slate-300">Edit</button>
                                <button onClick={() => deleteItem(items.id)} className="bg-red-800 text-white rounded-lg px-2 py-1 hover:bg-red-500">Delete</button>
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
export default ItemManage;