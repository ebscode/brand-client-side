import Aos from "aos";
import { useEffect } from "react";


const Featurecard = ({data}) => {
    useEffect(()=>{

        Aos.init({duration: 2000});


    },[])
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000">
         <div className="relative flex flex-col shadow-xl text-gray-700 bg-[#FAF7F5] dark:bg-gray-900 dark:text-white dark:border  rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden   h-96 rounded-xl bg-clip-border">
    <img
      src={data.photoUrl}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {data.productName}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {data.price} $
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 dark:text-white opacity-75">
    {data.details.slice(0,50)}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Add to Cart
    </button>
  </div>
</div>
        </div>
    );
};

export default Featurecard;