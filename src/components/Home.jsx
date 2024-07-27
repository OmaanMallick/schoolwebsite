import React from 'react';
import school2 from '../assets/school2.jpg'; 
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (

        <div className="text-center">
       
    <Carousel>
    
    <Carousel.Item>
      <img
        className="object-cover w-full h-[90vh] m-auto  bg-top shadow-[0_0_px_white]"
        src={school2}
        alt="First slide"/>
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="object-cover w-full h-[85vh] m-auto   bg-top shadow-[0_0_px_white]"
        src={school2}
        alt="First slide"/>
      <Carousel.Caption>
     
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="object-cover w-full h-[85vh] m-auto bg-top shadow-[0_0_px_white]"
        src={school2}
        alt="First slide"/>
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
   
    
  </Carousel>
  </div>
      
        
      
    
  );
}


export default Home;
