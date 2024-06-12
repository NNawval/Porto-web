import React from 'react';
import gofitz from "../assets/gofitz.png"
import jasakula from "../assets/jasakula.png"
import fishcare from "../assets/fishcare.png"
const Project = () => {
  const Data = [
    { id: 1, title: 'GoFitz', image: gofitz},
    { id: 2, title: 'JasaKula', image: jasakula },
    { id: 3, title: 'FishCare', image: fishcare },
  ];


  return (
    <div className="md:grid grid-cols-2 gap-6 w-full p-12 tablet:p-10 mobile:p-6">
              {Data.map(item => (
          <tr key={item.id}>
 <div className="relative w-full h-full rounded-lg aspect-[3/2] my-6 md:my-0 transition-all duration-300 ease-in-out group">
        <img
          src={item.image}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 text-black pb-8 pl-7 md:pb-16 md:pl-14  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-2xl tablet:text-xl mobile:text-lg font-neue">{item.title}</span>
        </div>
      </div>
          </tr>
        ))}
     

    </div>
  );
};

export default Project;