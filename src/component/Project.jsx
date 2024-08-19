import { useState } from 'react';
import React from 'react';
import gofitz from "../assets/gofitz.png"
import gofitz1 from "../assets/gofitz1.png"
import jasakula from "../assets/jasakula.png"
import jasakula1 from "../assets/jasakula1.png"
import fishcare from "../assets/fishcare.png"
import fishcare1 from "../assets/fishcare1.png"
import dashboard from "../assets/dashboard.png"
import ProjectCard from './ProjectCard';
const Project = () => {

  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      console.log('aa');
    }, 200); // delay 400ms (0.4 detik)
  };

  const Data = [
    { id: 1, title: 'GoFitz', 
      description : 'Gofitz is a convenient online marketplace for futsal enthusiasts to easily book and rent futsal fields in their area. With just a few clicks, users can explore various available fields, check availability, and make reservations at their preferred time slots.' ,
      image: gofitz, 
      role:`UI design<br>Fullstack web developer`, 
      framework :`ReactJs<br>Bootstrap<br>Supabase database`,
      link : 'https://github.com/NNawval/Gofitz-website'},
    { id: 2, title: 'JasaKula', 
      image: jasakula,  
      description : "JasaKula platforms are online marketplaces that enable individuals to offer their services to indonesia customers. Users can find a wide range of services, from graphic design, content writing, translation, to digital marketing and more. Freelancers on the platform have personalized profiles showcasing their portfolios, service rates, and reviews from previous clients, aiding potential customers in making informed decisions.", 
      role:`UI design<br>Fullstack mobile developer`, 
      framework :`React Native<br>Supabase database` },
    { id: 3, title: 'FishCare',  
      description : 'FishCare are innovative app for monitoring fish ponds and automating feeding! Revolutionizing fish management, it offers real-time monitoring and automated feeding for optimal fish health. Integrated with IoT, users can remotely monitor crucial parameters like water temperature and pH levels, ensuring the ideal environment for their fish.',
      image: fishcare,  
      role:`UI design<br>Fullstack web developer`, 
      framework :`ReactJs<br>Tailwind Css<br>Firebase database`,
      link : 'https://github.com/NNawval/Fishcare-website'},
      { id: 4, title: 'Risk Control Center',  
        description : 'State-Owned Enterprises Risk Control Center. Designed to help organizations identify, monitor, and manage various risks that could impact business operations and sustainability. This application serves as a risk control hub, providing comprehensive visibility into potential risks, enabling more effective preventive actions, and supporting more informed decision-making.',
        image: dashboard,  
        role:`Fullstack web developer`, 
        framework :`Laravel<br>Bootstrap 5<br>PostgreSQL`,
        link : ''},
  ];
  const [showProject, setShowProject] = useState("");

  return (
    <div >
      <div id='projectcard'></div>
      <div >
      {showProject === 'JasaKula' ? <ProjectCard title={Data[1].title} description={Data[1].description} role={Data[1].role} framework={Data[1].framework} image={jasakula1}/> :
         showProject === 'GoFitz' ? <ProjectCard title={Data[0].title} description={Data[0].description} role={Data[0].role} framework={Data[0].framework} image={gofitz1} link={Data[0].link}/> :
         showProject === 'FishCare' ? <ProjectCard title={Data[2].title} description={Data[2].description} role={Data[2].role} framework={Data[2].framework} image={fishcare1} link={Data[2].link}/> :
         showProject === 'Risk Control Center' ? <ProjectCard title={Data[3].title} description={Data[3].description} role={Data[3].role} framework={Data[3].framework} image={dashboard} link={Data[3].link}/> :
         <ProjectCard/>}
      </div>
      <div id='projects' className='flex justify-start mt-32 p-12 tablet:p-10 mobile:p-6'>
      <h1 className="font-neue uppercase text-3xl font-bold mobile:text-center">
            My Course Project
             
          </h1>
      </div>
    <div className="md:grid grid-cols-2 gap-6 w-full p-12 tablet:p-10 mobile:p-6">
              {Data.map(item => (
          <tr key={item.id}>
 <button className="relative w-full h-full rounded-lg aspect-[3/2] my-6 md:my-0 transition-all duration-300 ease-in-out group" onClick={() => {setShowProject(item.title); scrollToSection('projectcard');}} >
        <img
          src={item.image}
          className="w-full h-full object-cover"
          
        />

        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 text-black pb-8 pl-7 md:pb-16 md:pl-14  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-2xl tablet:text-xl mobile:text-lg font-neue">{item.title}</span>
        </div>
      </button>
          </tr>
        ))}
     

    </div>
    </div>
  );
};

export default Project;