import React from 'react';
import PageHeader from './PageHeader';
import img from '../assets/images/cursorImg/map.webp'

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632, 02 982 745",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];

function Contact() {
  return (
    <div className="bg-gray-50 py-16 mt-10">
      <PageHeader titel={conSubTitle} curPage="Contact us" />

      <div className="container mx-auto px-4 mt-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-blue-500 uppercase font-semibold tracking-wide">{subTitle}</h3>
          <h2 className="text-4xl font-bold text-gray-800 mt-4">{title}</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Side - Contact Information */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contactList.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <img
                  src={item.imgUrl}
                  alt={item.imgAlt}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{conTitle}</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 rounded-lg border-none bg-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 rounded-lg border-none bg-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 mt-2 rounded-lg border-none bg-gray-200"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all text-white"
                >
                  {btnText}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Our Location</h3>
          <div className="w-full overflow-hidden">
            {/* Embed Google Map */}
           <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
 