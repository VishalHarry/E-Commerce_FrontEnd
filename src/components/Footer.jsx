import React from "react";

const title = "About ShopCart";
const desc =
  "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const itemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "New York, USA.",
  },
  {
    iconName: "icofont-phone",
    text: "+880 123 456 789",
  },
  {
    iconName: "icofont-envelope",
    text: "info@shopcart.com",
  },
];

const categories = ["All Products", "Shop", "Blog", "About", "Policy", "FAQs"];
const quickLinks = [
  "Summer Sessions",
  "Events",
  "Gallery",
  "Forums",
  "Privacy Policy",
  "Terms of Use",
];
const tweets = [
  {
    user: "Aminur Islam",
    handle: "@ShopCart",
    content: "Greetings! #HTML_Template Grab your item, 50% Big Sale Offer !!",
  },
  {
    user: "Somrat Islam",
    handle: "@ShopCart",
    content: "Hey! #HTML_Template Grab your item, 50% Big Sale Offer !!",
  },
];

function Footer() {
  return (
    <div className=" bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About ShopCart */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
          <p className="mb-4 text-gray-200 text-sm">{desc}</p>
          <ul>
            {addressList.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <i className={`${item.iconName} text-sm mr-2`}></i>
                {item.text}
              </li>
            ))}
          </ul>
          {/* Social Icons */}
          <div className="flex mt-4 space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-200"
            >
              <i className="icofont-facebook"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center  bg-white hover:bg-gray-200 rounded-full "
            >
              <i className="icofont-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white hover:bg-gray-200 rounded-full"
            >
              <i className="icofont-linkedin"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white hover:bg-gray-200 rounded-full "
            >
              <i className="icofont-instagram"></i>
            </a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">{itemTitle}</h4>
          <ul>
            {categories.map((item, index) => (
              <li key={index} className="mb-2 ">
                <a
                  href="#"
                  className=" hover:text-yellow-500 transition duration-300 "
                  style={{ color: 'white' }} 
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
  <h4 className="text-xl font-bold mb-4 text-white">{quickTitle}</h4>
  <ul>
    {quickLinks.map((item, index) => (
      <li key={index} className="mb-2">
        <a
          href="#"
          className="text-white hover:text-yellow-500 transition duration-300"
          style={{ color: 'white' }} // Inline style as fallback
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>



        {/* Recent Tweets */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">{tweetTitle}</h4>
          <ul>
            {tweets.map((tweet, index) => (
              <li key={index} className="mb-4">
                <div className="flex items-start">
                  <i className="icofont-twitter text-xl text-white mr-2"></i>
                  <div>
                    <p className="font-bold text-white">{tweet.user}</p>
                    <p className="text-sm text-white">{tweet.handle}</p>
                    <p className="text-white text-sm    " >{tweet.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
