import React from 'react';
import school2 from '../assets/school2.jpg'; 
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (

        <div className="text-center">
       
    <Carousel>
    <Carousel.Item>
      <img
        className="object-cover w-full h-[85vh] m-auto  bg-top shadow-[0_0_px_white]"
        src={school2}
        alt="First slide"/>
      <Carousel.Caption>
       <div className='flex-col'>
          <h3 className="text-3xl mb-10 font-bold">Springdale Public School</h3> 
          <p className='text-1xl mb-10'>
            Welcome to Springdale Public School, where we nurture young minds for a brighter future. 
          </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="object-cover w-full h-[90vh] m-auto  bg-top shadow-[0_0_px_white]"
        src={school2}
        alt="First slide"/>
      <Carousel.Caption>
       <div className='flex-col'>
          <h3 className="text-3xl mb-10 font-bold">Springdale Public School</h3> 
          <p className='text-1xl mb-10'>
            Welcome to Springdale Public School, where we nurture young minds for a brighter future. 
          </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="object-cover w-full h-[85vh] m-auto   bg-top shadow-[0_0_px_white]"
        src={school2}
        alt="First slide"/>
      <Carousel.Caption>
       <div className='flex-col'>
          <h3 className="text-3xl mb-10 font-bold">Springdale Public School</h3> 
          <p className='text-1xl mb-10'>
            Welcome to Springdale Public School, where we nurture young minds for a brighter future. 
          </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="object-cover w-full h-[85vh] m-auto bg-top shadow-[0_0_px_white]"
        src={school2}
        alt="First slide"/>
      <Carousel.Caption>
       <div className='flex-col'>
          <h3 className="text-3xl mb-10 font-bold">Springdale Public School</h3> 
          <p className='text-1xl mb-10'>
            Welcome to Springdale Public School, where we nurture young minds for a brighter future. 
          </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
   
    3
  </Carousel>
  </div>
      
        
      
    
  );
}


export default Home;
