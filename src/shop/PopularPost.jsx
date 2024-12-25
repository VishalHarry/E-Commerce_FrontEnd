import React from 'react';
import { Link } from 'react-router-dom';

const postList = [
  { id: 1, imgUrl: '/src/assets/images/blog/10.jpg', imgAlt: 'rajibraj91', title: 'Poor People Campaign Our Resources', date: 'Jun 05,2022' },
  { id: 2, imgUrl: '/src/assets/images/blog/11.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022' },
  { id: 3, imgUrl: '/src/assets/images/blog/12.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022' },
  { id: 4, imgUrl: '/src/assets/images/blog/09.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022' },
];

function PopularPost() {
  return (
    <div className="p-5 bg-gray-50 shadow rounded-lg mt-10">
      <div>
        <h5 className="text-lg font-semibold mb-4">Popular Post</h5>
      </div>
      <ul className="space-y-4">
        {postList.map((post) => (
          <li key={post.id} className="flex gap-4 items-start">
            <div className="post-thumb flex-shrink-0 w-24 h-24">
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.imgUrl}
                  alt={post.imgAlt}
                  className="w-full h-full object-cover rounded-md"
                />
              </Link>
            </div>
            <div className="post-content">
              <h6 className="text-md font-medium hover:text-blue-500">
                {post.title}
              </h6>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularPost;
