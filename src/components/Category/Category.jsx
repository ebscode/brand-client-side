/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Categorycard from "./Categorycard";


const Category = ({loader}) => {
 

    // const[gelo,setvalue]=useState()

    const [data,setdata]=useState(loader.slice(0,6))
    return (
        
       <div>
        <h1 className="text-3xl text-center font-semibold dark:text-white m-8">FEATURED CATEGORIES</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-4">
            {
                data && data.map(get=><Categorycard key={get._id} value={get}  ></Categorycard>)
            }
           
        </div>
      
       </div>
    );
};

export default Category;