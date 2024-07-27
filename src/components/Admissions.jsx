import React from 'react';
import school2 from '../assets/school2.jpg';

function Admissions() {
  return (
    <section className="py-18 mb-12" id="date-section">
      <div className="w-full mx-auto px-4">
        <div
          className="bg-cover bg-center rounded-lg flex items-center justify-between px-6"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${school2})`,
            height: '88vh',
          }}
        >
          <div className="ml-20 relative z-10 text-left text-white w-1/2 pr-6">
            <h2 className="text-3xl lg:text-5xl mb-8">Important Dates</h2>
            <p className="text-[1.2rem]">Admission Form Availability: March 1st</p>
            <p className="text-[1.2rem]">Last Date for Submission: March 31st</p>
            <p className="text-[1.2rem]">Entrance Test: April 15th</p>
            <p className="text-[1.2rem]">Announcement of Results: April 30th</p>
          </div>
          <div className="relative z-10 text-left text-white w-1/2 pl-6">
            <h2 className="text-3xl lg:text-4xl mb-8">Process</h2>
            <p className="mb-4">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
            <h2 className="text-3xl lg:text-4xl mb-8">Criteria</h2>
            <p>Admission is based on entrance test performance and previous academic records. Specific criteria may apply depending on the grade level.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admissions;
