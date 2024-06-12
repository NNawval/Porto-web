import React from "react";
import Navbar from './component/Navbar';
import About from './component/About';
import '/src/index.css';
import Intro from './component/Intro';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Project from './component/Project';


function Home(){

    return (
        <div className='bg-white'>
        <i className="fa-solid fa-house"></i>
        <Navbar />
        <main>
          <Intro />
          <div className='px-36'>
            <div className="py-6 border-t-[0.6px] mobile:px-6 tablet:px-8 border-slate-200 text-center text-[14px] text-slate-500"></div>
          </div>

          <About />
          <div className='px-36'>
            <div className="py-6 border-t-[0.6px] mobile:px-6 tablet:px-8 border-slate-200 text-center text-[14px] text-slate-500"></div>
          </div>
          <Skills />
          <Project/>
          <Contact />
        </main>
      </div>
    )
}

export default Home;