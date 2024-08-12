import React from 'react';
import blogpic1 from '../assets/blog1.jpg';
import blogpic2 from '../assets/blog2.jpg';
import blogpic3 from '../assets/blog3.jpg';
import blogpic4 from '../assets/blog4.jpg';

const Blog = () => {
  const posts = [
    { id: 1, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: blogpic1 },
    { id: 2, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: blogpic2 },
    { id: 3, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: blogpic3 },
    { id: 4, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: blogpic4 },
  ];

  return (
    <section className="w-[1920px] h-[784px] py-[100px] mx-auto flex flex-col items-center gap-[24px] opacity-100">
      <div className="w-[1920px] h-[552px] px-[300px] flex flex-col items-center gap-[70px] opacity-100">
        <div className="w-[540px] h-[132px] flex flex-col items-center gap-[24px] opacity-100">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <p className="text-gray-600 mb-12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-[312px] h-[226px] object-cover rounded-lg mb-4"
              />
              <p className="text-gray-400">{post.date} | 246 Comments</p>
              <h3 className="text-xl font-semibold">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
