import chikenrice from '../assets/chiken.jpg';


function Shoppingcart(){
  

    

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
            
          <div className=" w-1/3  bg-white ">
            <div className='pl-5 p-2 mb-3 flex items-center space-x-2'>
                <label className='text-slate-800 font-serif'>Select Food Category :</label>
                <select className='text-slate-600 font-serif block mb-3 mt-5 w-52 p-2 border border-slate-300 rounded-lg' required>
                <option value="">select category</option>
                </select>
            </div>

            <div className="overflow-y-auto max-h-custom  px-2">
            {/* item add */}
           <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>


           <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>

           <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>

           <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>

           <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>
           <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>

           <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>

           <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>

           
           </div>
           
           

           
          </div>


          {/*second part*/}
          <div className=" w-1/3   bg-white-300">
          <div className='pl-5 p-2 mb-3 flex items-center space-x-2'>
                <label className='text-slate-800 font-serif'>Select Food Category :</label>
                <select className='text-slate-600 font-serif block mb-3 mt-5 w-52 p-2 border border-slate-300 rounded-lg' required>
                <option value="">select category</option>
                </select>
            </div>



            <div className="overflow-y-auto max-h-custom  px-2">
            <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>
           <div className="-mb-2 p-1">
            {/* map function */}
            <div className="border border-slate-500 rounded-lg p-2 mb-3">
                <div >
            <img src={chikenrice} alt='chiken rice' className="h-16 w-16 rounded-lg mr-3 justify-center"  	/>

                <div className='-mt-12'>
                <div className="text-xl font-serif text-slate-800 text-right">chiken Rice </div>
                <div className="text-sm text-slate-400 text-right"> Rs.850.00</div>
                </div>
                </div>
            </div>

           </div>

          </div>
            </div>

            {/*Third Part*/}
          <div className="w-1/3  h-2/3 bg-gray-100">
            <span className='text-slate-800 text-xl font-serif   p-2 '><h3 className='text-center	'>New Order</h3> </span>

            <table className=' w-full border-separate border-spacing-0 border-none text-left '>
                <thead>
                    <tr>
                        <th>Food ID</th>
                        <th>Food Name</th>
                        <th className=''>Food Price</th>
                    </tr>

                </thead>
                <tbody>
                    {/*map */}
                    <tr>
                        <td className='w-[80px]'>001</td>
                        <td className='w-[150px]'>Chiken Rice</td>
                        <td className='w-[100px] text-right'>Rs 850.00</td>

                    </tr>

                    <tr>
                    <td colSpan={2}>
                                    <strong>Total</strong>
                                </td>
                                <td className="border-t border-slate-800 text-right">
                                <strong></strong>
                                </td>
                            </tr>
                    
                </tbody>
            </table>

            
         
            <div className='mt-3'>
                <label className='ml-1 font-serif '> Bill Payemet:</label>
                <input type='text' className=' ml-20 p-1 border border-slate-500 rounded-lg' />
         </div>
         <div className='mt-3'>
            <label className='ml-1 font-serif '> Give Money:</label>
            <input type='text' className=' ml-20 p-1 border border-slate-500 rounded-lg' />
         </div>
         <div className='mt-3'>
            <label className='ml-1.5 font-serif '> Balance:</label>
            <input type='text' className=' ml-28 p-1 border border-slate-500 rounded-lg' />
         </div>
        
        <div className='mt-5 border-t border-slate-800'>
               
                <div className='space-x-8 mt-8 ml-28 '>
                <button type='submit' className='text-center rounded-lg font-serif font-bold bg-zinc-200 p-2 border border-2 bg-neutral-300 border-zinc-600  hover:border-white' >Clear</button>
                <button type='submit' className='text-center rounded-lg font-serif font-bold bg-zinc-200 p-2 border border-2 bg-neutral-300 border-zinc-600  hover:border-white' >Pay Order</button>
                </div>
             
        </div>

          </div>
        
        </div>
        
        </div>
      
                

                
                


            </div>
            
                
           
        
        
    )
}
export default Shoppingcart;