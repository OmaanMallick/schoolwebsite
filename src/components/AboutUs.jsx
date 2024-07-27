import React from 'react'
import img1 from '../assets/image.jpg'
import hist from '../assets/history.jpg'
import miss from '../assets/mission.jpg'
import vision from '../assets/vision.avif'

function AboutUs() {
  return (
  <>
  
   <div className="h-[20vh] w-full bg-blue-400 flex justify-around  items-center">
    <h1 className='  m-24 text-white text-3xl'>About Us</h1>
    <img src={img1} alt="" className="w-32 h-32 object-cover rounded-full" />
  </div>

  <style>
        {`
          .hover-underline {
            transition: border-bottom-color 0.3s;
          }
          .hover-underline:hover {
            border-bottom-color: #1E40AF; /* Tailwind's blue-700 color */
          }
        `}
      </style>
      <div className="flex flex-col md:flex-row md:justify-evenly mt-4 text-lg border-b-2 border-gray-200 p-4">
        <h1 className="text-center border-b-2 border-transparent hover-underline mb-4 md:mb-0 md:w-1/4">
          State-of-the-art science <br /> and computer labs
        </h1>
        <h1 className="text-center border-b-2 border-transparent hover-underline mb-4 md:mb-0 md:w-1/4">
          Spacious and well-equipped <br /> classrooms
        </h1>
        <h1 className="text-center border-b-2 border-transparent hover-underline mb-4 md:mb-0 md:w-1/4">
          Library with a vast collection of <br /> books and digital resources
        </h1>
        <h1 className="text-center border-b-2 border-transparent hover-underline mb-4 md:mb-0 md:w-1/4">
          Sports facilities including a playground,<br /> gymnasium, and swimming pool
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly mt-2 space-y-5 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <img src={hist} alt="" className="h-[25vh] w-full md:w-[18vw] object-cover" />
          <h1 className="text-2xl text-gray-500 mt-2">History</h1>
          <p className="text-gray-400 mt-2 text-center md:text-left">
            Founded in 1985, Springdale Public School has been <br /> dedicated to providing quality education and <br /> holistic development to students.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <img src={miss} alt="" className="h-[25vh] w-full md:w-[18vw] object-cover" />
          <h1 className="text-2xl text-gray-500 mt-2">Mission</h1>
          <p className="text-gray-400 mt-2 text-center md:text-left">
            To create a learning environment that fosters academic <br /> excellence, critical thinking, and ethical values.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <img src={vision} alt="" className="h-[25vh] w-full md:w-[18vw] object-cover" />
          <h1 className="text-2xl text-gray-500 mt-2">Vision</h1>
          <p className="text-gray-400 mt-2 text-center md:text-left">
            To empower students with the knowledge, skills, and <br /> values needed to thrive in a dynamic world.
          </p>
        </div>
      </div>
      <div className="bg-gray-200 mt-7 h-auto md:h-[11vh] w-full flex flex-col md:flex-row justify-center items-center p-4">
        <h1 className="text-xl">Principal's Message :</h1>
        <p className="mt-2 md:mt-0 md:ml-5 text-center md:text-left">
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
        </p>
      </div>
  </>
  )
}

export default AboutUs