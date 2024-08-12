import React from 'react';

const Blog = () => {
  const posts = [
    { id: 1, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: "blog1.jpg" },
    { id: 2, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: "blog2.jpg" },
    { id: 3, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: "blog3.jpg" },
    { id: 4, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: "blog4.jpg" },
  ];

  return (
    <section id="blog" className="text-center py-12">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <p className="text-gray-600 mb-12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
            <p className="text-gray-500">{post.date} | 12 Comments</p>
            <h3 className="text-xl font-semibold">{post.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;