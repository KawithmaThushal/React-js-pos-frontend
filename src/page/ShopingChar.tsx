import { useState } from 'react';


function Shoppingcart(){
  

    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
      { id: "all", label: "All" },
      { id: "dine-in", label: "Dine in" },
      { id: "to-go", label: "To go" },
      { id: "delivery", label: "Delivery" },
    ];


    return(
       
        <div className="flex space-x-4 border-b-4 border-gray-400 bg-white px-4 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-t-md ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>   
           
        
        
    )
}
export default Shoppingcart;