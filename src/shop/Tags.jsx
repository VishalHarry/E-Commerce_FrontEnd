import React from 'react';

const title = "Our Popular Tags";

const tagsList = [
  { link: "#", text: "envato" },
  { link: "#", text: "themeforest" },
  { link: "#", text: "codecanyon" },
  { link: "#", text: "videohive" },
  { link: "#", text: "audiojungle" },
  { link: "#", text: "3docean" },
  { link: "#", text: "envato" },
  { link: "#", text: "themeforest" },
  { link: "#", text: "codecanyon" },
];

function Tags() {
  return (
    <div className="p-5 bg-gray-50 shadow rounded-lg mt-20">
      <div className="mb-4">
        <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
      </div>
      <div className="flex flex-wrap gap-2">
        {tagsList.map((tag, index) => (
          <a
            href={tag.link}
            key={index}
            className="px-3 py-1 bg-gray-200 text-sm text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-900 transition-colors"
          >
            {tag.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Tags;
