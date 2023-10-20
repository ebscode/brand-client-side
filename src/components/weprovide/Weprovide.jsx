
import { TbTruckDelivery } from 'react-icons/tb';
import { GiPriceTag ,GiCalculator} from 'react-icons/gi';
import Aos from 'aos';
import { useEffect } from 'react';

const Weprovide = () => {
  useEffect(()=>{

    Aos.init({duration: 1000});


},[])
    return (
        <div data-aos="zoom-in-up">
                <div className="flex justify-center font-semibold text-4xl m-8"><h1>we provide</h1></div>
            <section className="text-gray-600 body-font">
  <div className="container px-5  ">

    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <TbTruckDelivery></TbTruckDelivery>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">fast delivery</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
           <GiPriceTag></GiPriceTag>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">best price</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <GiCalculator></GiCalculator>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">budget deals</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
    
    </div>
    
  </div>
</section>
        </div>
    );
};

export default Weprovide;