import React from 'react';
import vision from '../assets/vision.avif'; // Replace with actual image paths
import stud from '../assets/stud.jpg';
import music from '../assets/music.avif';
import img2 from '../assets/img2.jpg';

function GallerySection() {
  return (
    <section className="py-12 text-black" id="gallery-section">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Springdale Public School</h2>
          <p className="text-2xl text-gray-600">Gallery </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-full h-56">
            <img src={vision} alt="Gallery Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-56">
            <img src={stud} alt="Gallery Image 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-56">
            <img src={music} alt="Gallery Image 3" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-56">
            <img src={img2} alt="Gallery Image 4" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-56">
            <img src={vision} alt="Gallery Image 5" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-56">
            <img src={stud} alt="Gallery Image 6" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-56">
            <img src={img2} alt="Gallery Image 7" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-56">
            <img src={music} alt="Gallery Image 8" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
