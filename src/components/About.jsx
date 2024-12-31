import React from 'react';
import PageHeader from './PageHeader';
import img from '../assets/images/cursorImg/about.jpg'

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Experiences";
const desc =
  "Distinctively provide access multifuncto users whereas transparent processes incentivize efficient functionalities rather than extensible architecture. Communicate leveraged services and cross-platform solutions.";
const year = "30+";
const experience = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: '/src/assets/images/about/icon/01.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Skilled Instructors',
    desc: 'Distinctively provide access multifuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: '/src/assets/images/about/icon/02.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Get Certificate',
    desc: 'Distinctively provide access multifuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: '/src/assets/images/about/icon/03.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Online Classes',
    desc: 'Distinctively provide access multifuncto users whereas communicate leveraged services',
  },
];

function About() {
  return (
    <div className="bg-gray-50 py-16 mt-10">
      {/* <PageHeader titel="Our About Page" curPage="About" /> */}

      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="relative">
          <img
            src={img}
            alt="About Banner"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-50"></div>
          <div className="absolute top-1/3 left-1/4 text-white text-center w-2/3">
            <h3 className="text-xl uppercase font-semibold tracking-wide ">{subTitle}</h3>
            <h2 className="text-4xl font-bold mt-4">{title}</h2>
            <p className="text-lg mt-4 text-black">{desc}</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex justify-center items-center space-x-12 mt-12">
          <div className="bg-blue-500 text-white rounded-full w-32 h-32 flex items-center justify-center text-4xl font-bold">
            {year}
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800">{experience}</h3>
            <p className="text-lg text-gray-600 mt-2">Our Experience in the Industry</p>
          </div>
        </div>

        {/* About Services Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {aboutList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 text-center transform hover:scale-105 transition-transform"
            >
              <img
                src={item.imgUrl}
                alt={item.imgAlt}
                className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-blue-500"
              />
              <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
