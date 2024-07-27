import React from 'react';
import acad from "../assets/acad.jpg";

function Academics() {
  const cardData = [
    {
      title: 'Primary (Grades 1-5)',
      description: 'English, Mathematics, Science, Social Studies, Art, Physical Education',
    },
    {
      title: 'Secondary (Grades 6-10)',
      description: 'English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art',
    },
    {
      title: 'Science Stream (Grades 11-12)',
      description: 'Physics, Chemistry, Biology, Mathematics, Computer Science, English',
    },
    {
      title: 'Commerce Stream (Grades 11-12)',
      description: 'Accountancy, Business Studies, Economics, Mathematics, English',
    },
   
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-4 lg:px-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-500 text-center">
            Teaching <br /> <span className="font-thin text-blue-400 font-mono">Methodologies</span>
          </h1>
          <p className="text-md lg:text-2xl mt-6 lg:mt-10 text-center text-blue-300">
            We use a blend of traditional and modern teaching techniques <br /> to cater to different learning styles.
          </p>
          <div className="flex flex-col items-center mt-8 space-y-4 w-full lg:w-auto">
            <div className="relative w-full lg:w-[20vw]">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 transition duration-300"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 1110 10.9M21 21l-4.35-4.35"
                />
              </svg>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
                Learn More
              </button>
              <button className="text-blue-500 bg-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <img src={acad} alt="academics" className="w-full h-full object-cover"/>
        </div>
      </div>
     
      <section className="py-12 bg-gray-100" id="feature-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <img src={acad} alt="Package" className="w-16 h-16 mx-auto" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-700 mb-4 whitespace-pre-line">
                    {card.description}
                  </p>
                  <div className="learn">
                    <a href="#" className="text-blue-500 hover:underline">Learn more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Academics;
