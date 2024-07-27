import React from 'react';

function ContactSection() {
  return (
    <div className="py-6 w-full mx-auto" id="contact-section">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 uppercase font-baloo-chettan">Springdale Public School, Cityville, Delhi, 744410</h1>
          <p className="font-bold">Phone No: +(123) 456-786</p>
          <p className="font-bold">Email: info@Spingdale.edu</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-orange-600 p-8 shadow-lg rounded-lg">
              <form className="flex flex-col space-y-4 bg-orange-700 p-4 rounded-lg">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="p-3 border-none rounded text-gray-800"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="p-3 border-none rounded text-gray-800"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-3 border-none rounded text-gray-800"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="p-3 border-none rounded text-gray-800 h-32 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="p-3 bg-gray-800 text-white rounded-md w-1/3 hover:bg-white hover:text-gray-800 transition duration-300"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 w-full lg:w-1/2 p-4">
            <div className="h-[63vh]  w-full">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen=""
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
