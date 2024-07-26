import React from 'react';
import school from '../assets/school.jpg'; 
import Carousel from 'react-bootstrap/Carousel';
import { AlignCenter } from 'react-feather';

function Home() {
  return (

        <div className="text-center">
       
    <Carousel>
    <Carousel.Item>
      <img
        className="object-cover w-[60vw] h-[60vh] mx-auto px-7 py-4"
        src={school}
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item>
    <img
        className="object-cover  w-[60vw] h-[60vh] mx-auto px-7 py-4"
        src={school}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="object-cover  w-[60vw] h-[60vh] mx-auto px-7 py-4"
        src={school}
        alt="First slide"
      />

      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel>
  </div>
      
        
      
    
  );
}


export default Home;
