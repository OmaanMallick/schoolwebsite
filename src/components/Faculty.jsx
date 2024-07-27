import React from 'react';
import images1 from '../assets/images1.jpg'; // Replace with actual images as needed

const teachers = [
  {
    name: 'John Doe',
    title: 'Principal',
    description: 'M.Ed, 20 years of experience in educational administration.',
    image: images1, // Replace with the correct image path
  },
  {
    name: 'Jane Smith',
    title: 'Vice Principal',
    description: 'M.Sc. in Physics, 15 years of teaching experience.',
    image: images1, // Replace with the correct image path
  },
  {
    name: 'Emily Johnson',
    title: 'English Teacher',
    description: 'M.A. in English, 10 years of teaching experience.',
    image: images1, // Replace with the correct image path
  },
  {
    name: 'Michael Brown',
    title: 'Mathematics Teacher',
    description: 'M.Sc. in Mathematics, 8 years of teaching experience.',
    image: images1, // Replace with the correct image path
  },
  {
    name: 'Sophia Davis',
    title: 'Science Teacher',
    description: 'M.Sc. in Chemistry, 12 years of teaching experience.',
    image: images1, // Replace with the correct image path
  },
  {
    name: 'David Wilson',
    title: 'Computer Science Teacher',
    description: 'B.Tech in Computer Science, 5 years of teaching experience.',
    image: images1, // Replace with the correct image path
  },
];

function TeachersSection() {
  return (
    <section id="teacher-section">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
        </div>
        <h1 className="text-4xl lg:text-5xl font-handlee text-blue-900 mb-6">Meet Our Teachers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-40 w-40 sm:h-48 sm:w-48 md:h-55 md:w-55 rounded-full object-cover mx-auto"
                />
                <div className="absolute inset-0 bg-sky-500 opacity-0 rounded-full transition-opacity duration-300 hover:opacity-80 flex justify-center items-center">
                  <div className="text-white">
                    <a href="#" className="block w-10 h-10 border border-white rounded-full flex items-center justify-center m-1 hover:bg-white hover:text-black transition-colors">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" className="block w-10 h-10 border border-white rounded-full flex items-center justify-center m-1 hover:bg-white hover:text-black transition-colors">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" className="block w-10 h-10 border border-white rounded-full flex items-center justify-center m-1 hover:bg-white hover:text-black transition-colors">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.title}</p>
              <p className="text-gray-500 text-sm">{teacher.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeachersSection;
