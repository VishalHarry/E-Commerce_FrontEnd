import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogList from '../utilis/blogdata';

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogList.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container mx-auto mt-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-red-600">404 - Blog Not Found</h2>
        <p className="text-gray-600 mt-4">The blog you are looking for does not exist.</p>
        <Link
          to="/blog"
          className="text-white bg-blue-500 hover:bg-blue-600 mt-6 inline-block px-6 py-2 rounded-lg shadow-lg"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-32 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-lg">
          <img
            src={blog.imgUrl}
            alt={blog.imgAlt}
            className="w-full h-96  object-cover  rounded-t-lg"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
            <p className="text-gray-700 leading-relaxed mb-6">{blog.desc}</p>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Blog Details</h2>
          <ul className="space-y-4">
            {blog.metaList.map((meta, index) => (
              <li
                key={index}
                className="flex items-center text-gray-600 space-x-2 border-b pb-2"
              >
                <i className={`${meta.iconName} text-blue-500`}></i>
                <span>{meta.text}</span>
              </li>
            ))}
            <li className="flex items-center text-gray-600 space-x-2 border-b pb-2">
              <i className="icofont-speech-comments text-blue-500"></i>
              <span>{blog.commentCount} Comments</span>
            </li>
          </ul>
          <Link
            to="/blog"
            className="block mt-6 text-center text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg shadow-md"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
