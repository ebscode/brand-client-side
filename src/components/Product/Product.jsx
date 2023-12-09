import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Banner from "../Banner/Banner";
import { useState } from "react";
import Probanner from "../ProBanner/Probanner";


const Product = () => {
    const loader=useLoaderData()
    const [data,setdata]=useState()
    // console.log(data)
    return (
        <div>
        <div>
        {
        <Probanner data={data}></Probanner>
         }
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 ">
          {
                 loader?.map(valu=>(
                    <ProductCard key={valu._id} it={valu} setdata={setdata} ></ProductCard>
                
                ))
                
            }
           
          </div>
          
        </div>
    );
};

export default Product;