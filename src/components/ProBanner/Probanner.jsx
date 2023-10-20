/* eslint-disable react/prop-types */

const Probanner = ({data}) => {
  console.log(data)
    return (
        <div>
  
    <div className="carousel h-screen w-full">
    <div id="slide1" className="carousel-item  relative h-screen w-full">
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Z6wqc2j/7995905.jpg)'}}>
  
    <div className="bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="">
  
      
      </div>
    </div>
  </div>
  
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          
        <a href="#slide4" className="btn btn-circle">❮</a> 
   
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
  
  
  
  
  
    <div id="slide2" className="carousel-item relative w-full">
    <div className="hero min-h-screen" style={{backgroundImage: 'url(  https://i.ibb.co/QpFQKxK/3rd.jpg  )'}}>
    <div className=" bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
  
    </div>
  </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
  
  
  
  
  
  
  
  
    <div id="slide3" className="carousel-item relative w-full">
    <div className="hero min-h-screen" style={{backgroundImage: 'url( https://i.ibb.co/1bqsVQ5/2nd.jpg)'}}>
    <div className=" bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="">
  
       
      </div>
    </div>
  </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
  
  
  
  
  
  
   
  
  
  
    
  </div>    
  
        </div>
    );
};

export default Probanner;