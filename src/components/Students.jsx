import React from 'react';
import acad from '../assets/acad.jpg';

const cardData = [
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

function CardSection() {
  return (
   <>
   <section className="py-12 bg-gray-100" id="feature-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className={`p-6 ${card.bgColor}`}>
                  <img src={acad} alt="Package" className="w-16 h-16 mx-auto" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-700 mb-4 whitespace-pre-line">
                    {card.content}
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

export default CardSection;
