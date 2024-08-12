import React from 'react';

const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className="w-full text-center bg-gray-900 text-white py-12"
      style={{ 
        width: '100vw', 
        marginLeft: 'calc(-50vw + 50%)', 
        width: '1921px', height: '472px', 
        padding: '100px 650px', 
        gap: '32px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}
    >
      <h2 className="text-3xl font-bold mb-4">
        Do you have Project Idea?<br />Let’s discuss your project!
      </h2>
      <p className="text-gray-400 mb-8">
        There are many variations of passages of Lorem Ipsum available,<br />but the majority have suffered alteration.
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">
        Let’s work together
      </button>
    </section>
  );
};

export default CallToAction;
