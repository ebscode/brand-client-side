/* eslint-disable react/prop-types */
import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categorycard = ({value}) => {
    useEffect(()=>{

        Aos.init({duration: 2000});


    },[])
   


    return (
        <div  data-aos="fade-up"
        data-aos-duration="1000" className="flex justify-center mt-7">
<Link to={`/product/${value.brandName}`}>
<button>
<div className="card card-compact w-80 h-28 bg-base-100 shadow-xl">
  <figure><img src={value.brandLogo} className="w-28" alt="Shoes" /></figure>
  <div className="card-body">
   
    <div className="card-actions justify-center">
      <button className="font-semibold" >{value.brandName}</button>
    </div>
  </div>
</div>
</button>
</Link>

{/* {
    gl.map(item=>setdata(item))
} */}
        </div>
    );
};

export default Categorycard;