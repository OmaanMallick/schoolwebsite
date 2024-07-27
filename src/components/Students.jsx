import React from 'react';

const cards = [
  {
    title: 'Life at Springdale',
    content: "Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club\nClubs and Societies: Literary Society, Environmental Club, Astronomy Club, Coding Club",
    bgColor: 'bg-yellow-500',
  },
  {
    title: 'Achievements',
    content: "John Smith - National Level Math Olympiad Winner\nSarah Lee - Gold Medalist in State Swimming Championship\nTech Innovators Club - Winners of Inter-School Robotics Competition",
    bgColor: 'bg-pink-700',
  },
  {
    title: 'Student Council',
    content: "President: Amy Parker, Grade 12\nVice President: Rajiv Mehta, Grade 11\nSecretary: Lisa Wong, Grade 10",
    bgColor: 'bg-purple-700',
  },
];

function Card({ title, content, bgColor }) {
  return (
    <div className="relative w-full sm:w-72 lg:w-[25vw] h-[60vh] bg-white mx-4 my-8 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 transform hover:scale-105">
      <div className={`absolute inset-0 ${bgColor} transition-transform duration-1000 transform hover:scale-150`} style={{ clipPath: 'circle(180px at center 0)' }}>
        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl pt-10 text-center">{title}</h2>
      </div>
      <div className="absolute inset-0 p-[20%] text-center flex flex-col justify-end">
        <p className="text-gray-600 transition-colors duration-500 whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}

function CardSection() {
  return (
    <div className=" flex h-[90vh] w-full items-center justify-center">
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default CardSection;
