import React from 'react';

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Product Admin Dashboard", image: "image1.jpg" },
    { id: 2, title: "Product Admin Dashboard", image: "image2.jpg" },
    { id: 3, title: "Product Admin Dashboard", image: "image3.jpg" },
    { id: 4, title: "Product Admin Dashboard", image: "image4.jpg" },
    { id: 5, title: "Product Admin Dashboard", image: "image5.jpg" },
    { id: 6, title: "Product Admin Dashboard", image: "image6.jpg" },
  ];

  return (
    <section id="portfolio" className="text-center py-12">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <p className="text-gray-600 mb-12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
              Case Study
            </button>
          </div>
        ))}
      </div>
      <button className="mt-12 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">
        More Projects
      </button>
    </section>
  );
};

export default Portfolio;