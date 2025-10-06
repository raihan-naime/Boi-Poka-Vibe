import React from "react";
import bannerImage from '../../assets/pngwing1.png'

const Banner = () => {
  return (
    <div className="hero bg-white">
      <div className="hero-content max-w-7xl mx-auto flex-col lg:flex-row-reverse">
        <img src={bannerImage} className=" rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-6xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary mt-5">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
