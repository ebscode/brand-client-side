import { useLoaderData } from "react-router-dom";
import Cartcard from "./Cartcard";
import { useState } from "react";
import Swal from "sweetalert2";


const MyCart = () => {
    
    const loadedcart=useLoaderData()
    const [cart,setcart]=useState(loadedcart)

    const handledelete=(id)=>{








        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cart/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    
                          const remaining=cart.filter(get=>get._id !==id)
                    setcart(remaining)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    
                      
                   
                })
            
            }
          })
    }
    
    return (
        <div>
            
         {
            cart.map(item=>(
                <div key={item._id}>

<body>
  <div className=" bg-gray-100 pt-20">
  
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={item.photoUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{item.productName}</h2>
              <p className="mt-1 text-xs text-gray-700">{item.brandName}</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">{item.price} $</p>
             <button onClick={ () => handledelete (item._id) } >   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg></button>
                
              </div>
            </div>
          </div>
        </div>
      
      </div>
   
 
    </div>
  </div>
</body>

                </div>

            ))
         }
        </div>
    );
};

export default MyCart;