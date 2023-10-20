import Aos from 'aos';
import img from '../../assets/Screenshot 2023-10-20 123321.jpg'
import Blog from './Blog';
import { useEffect } from 'react';
const Trusted = () => {
    useEffect(()=>{

        Aos.init({duration: 2000});


    },[])
    return (
        <div>
           <div data-aos="fade-up"
        data-aos-duration="1000">
           <img className='flex justify-center mt-6 mb-6 items-center w-full' src={img} alt="" />
           </div>
            <Blog></Blog>
            <section data-aos="fade-up"
        data-aos-duration="1000" className="bg-[#FAF7F5] ">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-gray-800">explore our  <br/> awesome services</h1>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize ">Upgrade Your Lifestyle with Smart Solutions.</h1>

                        <p className="mt-3 text-gray-500 ">
                        Smart technology offers more reliable security than traditional, manually operated security systems
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize ">24/7 support</h1>

                        <p className="mt-3 text-gray-500">
                        24/7 support, often referred to as 24/7 customer support or round-the-clock assistance, is a service provided by many businesses and organizations to ensure that customers or clients
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize ">Secure Payment Processing</h1>

                        <p className="mt-3 text-gray-500 ">
                        Secure payment processing incorporates fraud detection mechanisms that analyze transaction patterns, monitor for suspicious activity, and apply machine learning algorithms to identify
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://plus.unsplash.com/premium_photo-1658506777574-ba61c5bf1ca4?auto=format&fit=crop&q=80&w=1458&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            </div>
        </div>

        <hr className="my-12 border-gray-200 dark:border-gray-700"/>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/2560px-Samsung_wordmark.svg.png" alt="" />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img src="https://i.ibb.co/Tr2QfRX/Ryzen-Logo-wine.png" alt="" />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               <img src="https://i.ibb.co/grnd65s/Microsoft-logo-rgb-c-gray.png" alt="" />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img src="https://i.ibb.co/86F0jTs/Sony-Logo-1957.png" alt="" />
            </div>

            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              <img src="https://i.ibb.co/nPSFRDS/Google-logo.png" alt="" />
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Trusted;