import React from "react";
import { Link } from "react-router-dom";
import blogList from '../utilis/blogdata'
const Blog = () => {
 

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogList.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={blog.imgUrl}
              alt={blog.imgAlt}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
              <ul className="flex justify-between text-sm text-gray-500 mb-4">
                {blog.metaList.map((meta, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <i className={meta.iconName}></i>
                    <span>{meta.text}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                {blog.btnText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
