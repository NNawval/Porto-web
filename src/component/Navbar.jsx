import React from 'react';

const Navbar = () => {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <nav className="containter bg-transparent top-0 w-1/2 pt-6 px-32 ">
      <div className="">
        <div>
          <ul className="flex font-poppins  text-sm mobile:text-[10px] tablet:text-[10px]">
            <li >
              <button  onClick={() => scrollToSection('home')} className="justify-center mr-4 text-black hover:text-blue-500 hover:border-b-blue-700">HOME</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="justify-center mx-4 text-black hover:text-blue-500">ABOUT</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="justify-center  mx-4 text-black hover:text-blue-500">SKILLS</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="justify-center  mx-4 text-black hover:text-blue-500">PROJECTS</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
