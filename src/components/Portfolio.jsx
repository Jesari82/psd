import React from 'react';
import portfoliopic1 from '../assets/portfolio1.jpg';
import portfoliopic2 from '../assets/portfolio2.jpg';
import portfoliopic3 from '../assets/portfolio3.jpg';
import portfoliopic4 from '../assets/portfolio4.jpg';
import portfoliopic5 from '../assets/portfolio5.jpg';
import portfoliopic6 from '../assets/portfolio6.jpg';

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Product Admin Dashboard", image: portfoliopic1 },
    { id: 2, title: "Product Admin Dashboard", image: portfoliopic2 },
    { id: 3, title: "Product Admin Dashboard", image: portfoliopic3 },
    { id: 4, title: "Product Admin Dashboard", image: portfoliopic4 },
    { id: 5, title: "Product Admin Dashboard", image: portfoliopic5 },
    { id: 6, title: "Product Admin Dashboard", image: portfoliopic6 },
  ];

  const ProjectCard = ({ project }) => (
    <div className="flex flex-col gap-[32px] border border-t-0 border-gray-200 rounded-t-lg w-[424px] h-[476px] p-0 pb-[32px] relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-[424px] h-[248px] object-cover rounded-t-lg"
      />
      <div className="flex flex-col gap-[32px] px-[16px] pt-[16px] pb-[16px]">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-500">
          Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.
        </p>
        <div className="flex flex-row justify-start">
          <button className="bg-white border border-[#A53DFF] text-[#A53DFF] font-[600] text-[16px] leading-[24px] py-[12px] px-[24px] rounded-[4px_0_0_0]">
            Case Study
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col items-center py-[100px] px-0 gap-[50px] w-[1920px] h-[1472px]">
      <div className="flex flex-col items-center gap-[70px] w-[1920px] h-[1174px]">
        <div className="flex flex-col items-center justify-between w-[1920px] h-[128px] px-[300px] gap-0">
          <h2 className="text-4xl font-bold">Portfolio</h2>
          <p className="text-gray-600 text-center">
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration.
          </p>
        </div>

        <div className="flex flex-col gap-[24px] w-[1920px] h-[976px] px-[300px]">
          {projects.reduce((acc, project, index) => {
            if (index % 3 === 0) acc.push([]);
            acc[acc.length - 1].push(project);
            return acc;
          }, []).map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row gap-[24px] w-[1320px] h-[476px]">
              {row.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-[48px]">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-[600] text-[16px] leading-[24px] py-[12px] px-[24px] rounded-[4px]" style={{ width: '149px', height: '48px' }}>
          More Projects
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
