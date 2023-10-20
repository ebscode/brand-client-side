import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
const Banner = () => {
    useEffect(()=>{

        Aos.init({duration: 2000});


    },[])
    return (
        <div>
 <div className="carousel h-screen w-full">
  <div id="slide1" className="carousel-item  relative h-screen w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url( https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
 

  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
<div data-aos="fade-right">
<h1 className="mb-5 text-6xl font-bold">Find Your Everyday Adventure.
</h1>
</div>
    <div data-aos="fade-left">
    <p className="mb-5 text-xl">Experience shopping at your fingertips </p>
    </div>
      <Link to={'/'}><button className="btn btn-primary rounded-md bg-gray-700  text-white">shop now</button></Link>
    </div>
  </div>
</div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        
      <a href="#slide4" className="btn btn-circle">❮</a> 
 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 





  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(  https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
<div data-aos="fade-right">
<h1 className="mb-5 text-6xl font-bold">Unlock Savings Blackfang E-commerce Specials.
</h1>
</div>
    <div data-aos="fade-left">
    <p className="mb-5 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem </p>
    </div>
      <Link to={'/'}><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 








  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(  https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
<div data-aos="fade-right">
<h1 className="mb-5 text-6xl font-bold">Your Trusted Partner for Hassle-Free  Shopping.
</h1>
</div>
    <div data-aos="fade-left">
    <p className="mb-5 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem </p>
    </div>
      <Link to={'/'}><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 






  <div id="slide4" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url( https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
<div data-aos="fade-right">
<h1 className="mb-5 text-6xl font-bold">Results that will move you.
</h1>
</div>
    <div data-aos="fade-left">
    <p className="mb-5 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem </p>
    </div>
      <Link to={'/'}><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>




  
</div>
 

        </div>
    );
};

export default Banner;