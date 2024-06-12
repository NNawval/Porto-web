import React from 'react';

const Project = ({ title, content }) => {
  return (
    <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out group">
      <div className="relative w-full h-full z-10">
        <img
          className="w-full h-full rounded-2xl transition-all duration-300 ease-in-out z-20 shadow-2xl group-hover:blur-sm group-hover:scale-150 group-hover:overflow-hidden group-hover:shadow-inner"
          src="https://i.im.ge/2022/11/15/SOLM3q.turquoise-katun-river-gorge-is-surrounded-by-high-mountains-majestic-autumn-sky-stormy-mountain-stream-runs-among-rocks-landscape-altai-mountains-beautiful-places-planet-1.jpg"
          alt="Beautiful landscape"
        />
      </div>
      <div className="absolute top-1/2 left-1.2 transform translate-x-full -translate-y-1/2 z-20 p-8 bg-purple-800 bg-opacity-50 text-white transition-all duration-[800ms] ease-in-out group-hover:translate-x-0">
        <span className="block text-2xl font-bold">Creative Tim</span>
        <span className="block text-sm mt-2">UI Kits, Templates and Dashboards. Join over 2,042,768 creatives to access all our products!</span>
        <button className="relative block outline-none cursor-pointer mt-6 bg-cyan-500 text-white py-2 px-6 rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default Project;