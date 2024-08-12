import React from 'react';
import blogpic1 from '../assets/blog1.jpg';
import blogpic2 from '../assets/blog2.jpg';
import blogpic3 from '../assets/blog3.jpg';
import blogpic4 from '../assets/blog4.jpg';
import pagination from '../assets/pagination-icon.png'; // Importiere das Bild für die Pagination

const Blog = () => {
  const posts = [
    { id: 1, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: blogpic1 },
    { id: 2, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: blogpic2 },
    { id: 3, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: blogpic3 },
    { id: 4, title: "Lorem ipsum dolor sit consea. Nulla purus arcu", date: "22 Oct, 2020", image: blogpic4 },
  ];

  return (
    <section className="py-[100px] mx-auto flex flex-col items-center gap-[24px] opacity-100">
      <div className=" flex flex-col items-center gap-[24px] opacity-100">
        <div className="px-[300px] flex flex-col items-center gap-[40px] opacity-100"> {/* Abstand auf 40px reduziert */}
          <div className="w-[540px] h-[132px] flex flex-col items-center gap-[24px] opacity-100">
            <h2 className="font-poppins text-[48px] font-[600] leading-[56px] text-left">Blog</h2> {/* Blog Überschrift */}
            <p className="text-[18px] font-[400] leading-[24px] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> {/* Beschreibung */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[312px] h-[226px] object-cover rounded-lg mb-4"
                />
                <p className="text-gray-400 text-[14px] font-[400] leading-[20px] text-left">{post.date} | 246 Comments</p> {/* Datum und Kommentare */}
                <h3 className="text-[18px] font-[500] leading-[24px] text-left">{post.title}</h3> {/* Blogtitel */}
              </div>       
            ))}
          </div>
          <figure className="flex justify-center mt-4 mb-16"> {/* Wenig Abstand nach oben (mt-4) und größerer Abstand nach unten (mb-16) */}
            <img src={pagination} alt="pagination" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Blog;