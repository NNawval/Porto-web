import React from 'react';

const Navbar = () => {
  return (
    <nav className="containter bg-transparent top-0 w-1/2 pt-6 px-32 ">
      <div className="">
        <div>
          <ul className="flex font-poppins  text-sm mobile:text-[10px] tablet:text-[10px]">
            <li >
              <a href="#" className="justify-center mr-4 text-black hover:text-blue-500 hover:border-b-blue-700">HOME</a>
            </li>
            <li>
              <a href="#" className="justify-center mx-4 text-black hover:text-blue-500">ABOUT</a>
            </li>
            <li>
              <a href="#" className="justify-center  mx-4 text-black hover:text-blue-500">SKILLS</a>
            </li>
            <li>
              <a href="#" className="justify-center  mx-4 text-black hover:text-blue-500">PROJECTS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
